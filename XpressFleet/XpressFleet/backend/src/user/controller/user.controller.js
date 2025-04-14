// Please don't change the pre-written code
// Import the necessary modules here

import { sendPasswordResetEmail } from "../../../utils/emails/passwordReset.js";
import { sendWelcomeEmail } from "../../../utils/emails/welcomeMail.js";
import { ErrorHandler } from "../../../utils/errorHandler.js";
import { sendToken } from "../../../utils/sendToken.js";
import {
  createNewUserRepo,
  deleteUserRepo,
  findUserForPasswordResetRepo,
  findUserRepo,
  getAllUsersRepo,
  updateUserProfileRepo,
  updateUserRoleAndProfileRepo,
} from "../models/user.repository.js";
import crypto from "crypto";

export const createNewUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {

    const newUser = await createNewUserRepo(req.body);
    await sendToken(newUser, res, 200);

    // Implement sendWelcomeEmail function to send welcome message
    await sendWelcomeEmail(newUser);
  } catch (err) {
    //  handle error for duplicate email
    if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
      return next(new ErrorHandler(400, "Email already registered."));
  }
  else
  {
    return next(new ErrorHandler(400, err));
  }
  }
};

export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new ErrorHandler(400, "please enter email/password"));
    }
    const user = await findUserRepo({ email }, true);

    if (!user) {
      return next(
        new ErrorHandler(401, "user not found! register yourself now!!")
      );
    }
    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return next(new ErrorHandler(401, "Invalid email or passswor!"));
    }
    await sendToken(user, res, 200);
  } catch (error) {
    return next(new ErrorHandler(400, error));
  }
};

export const logoutUser = async (req, res, next) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({ success: true, msg: "logout successful" });
};

export const forgetPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    // Find the user by email
    const user = await findUserRepo({ email });

    // Check if the user exists
    if (!user) {
      return next(new ErrorHandler(404, "User not found with the provided email"));
    }

    // Generate a reset token and save it to the user
    const resetToken = await user.getResetPasswordToken();
    await user.save();

    // Construct the reset password URL
    const resetUrl = `${req.protocol}://${req.get("host")}/api/storefleet/user/password/reset/${resetToken}`;

    // Implement the function to send the password reset email
    await sendPasswordResetEmail(user, resetUrl);

    res.status(200).json({
      success: true,
      message: "Password reset email sent successfully. Check your email for instructions.",
    });
  } catch (error) {
    return next(new ErrorHandler(500, error.message || "Internal Server Error"));
  }
};

export const resetUserPassword = async (req, res, next) => {
  const resetToken = req.params.token;
  const { newPassword, confirmPassword } = req.body;

  try {
    // Find the user by the reset token
    const user = await findUserForPasswordResetRepo(resetToken);

    // Check if the user exists and the token is valid
    if (!user) {
      return next(new ErrorHandler(400, "Invalid or expired reset token"));
    }

    // Update the user's password
    user.password = newPassword;
    await user.save();

    // Implement the function to send a notification email (optional)

    // Send a success response
    res.status(200).json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    return next(new ErrorHandler(500, error.message || "Internal Server Error"));
  }
};

export const getUserDetails = async (req, res, next) => {
  try {
    const userDetails = await findUserRepo({ _id: req.user._id });
    res.status(200).json({ success: true, userDetails });
  } catch (error) {
    return next(new ErrorHandler(500, error));
  }
};

export const updatePassword = async (req, res, next) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;
  try {
    if (!currentPassword) {
      return next(new ErrorHandler(401, "pls enter current password"));
    }

    const user = await findUserRepo({ _id: req.user._id }, true);
    const passwordMatch = await user.comparePassword(currentPassword);
    if (!passwordMatch) {
      return next(new ErrorHandler(401, "Incorrect current password!"));
    }

    if (!newPassword || newPassword !== confirmPassword) {
      return next(
        new ErrorHandler(401, "mismatch new password and confirm password!")
      );
    }

    user.password = newPassword;
    await user.save();
    await sendToken(user, res, 200);
  } catch (error) {
    return next(new ErrorHandler(400, error));
  }
};

export const updateUserProfile = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const updatedUserDetails = await updateUserProfileRepo(req.user._id, {
      name,
      email,
    });
    res.status(201).json({ success: true, updatedUserDetails });
  } catch (error) {
    return next(new ErrorHandler(400, error));
  }
};

// admin controllers
export const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await getAllUsersRepo();
    res.status(200).json({ success: true, allUsers });
  } catch (error) {
    return next(new ErrorHandler(500, error));
  }
};

export const getUserDetailsForAdmin = async (req, res, next) => {
  try {
    const userDetails = await findUserRepo({ _id: req.params.id });
    if (!userDetails) {
      return res
        .status(400)
        .json({ success: false, msg: "no user found with provided id" });
    }
    res.status(200).json({ success: true, userDetails });
  } catch (error) {
    return next(new ErrorHandler(500, error));
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await deleteUserRepo(req.params.id);
    if (!deletedUser) {
      return res
        .status(400)
        .json({ success: false, msg: "no user found with provided id" });
    }

    res
      .status(200)
      .json({ success: true, msg: "user deleted successfully", deletedUser });
  } catch (error) {
    return next(new ErrorHandler(400, error));
  }
};

export const updateUserProfileAndRole = async (req, res, next) => {
  const { userId, newRole, newData } = req.body;

  try {
    // Ensure that the admin has provided the necessary parameters
    if (!req.user._id || !newRole || !newData) {
      return next(new ErrorHandler(400, "Please provide userId, newRole, and newData"));
    }

    // Update the user's role and profile
    const updatedUser = await updateUserRoleAndProfileRepo(userId, {
      role: newRole,
      ...newData,
    });

    res.status(200).json({ success: true, updatedUser });
  } catch (error) {
    return next(new ErrorHandler(400, error));
  }
};
