// Please don't change the pre-written code
// Import the necessary modules here

import { createNewOrderRepo } from "../model/order.repository.js";
import { ErrorHandler } from "../../../utils/errorHandler.js";
import { findOrderByIdRepo } from "../model/order.repository.js";
import { findOrdersByUserIdRepo } from "../model/order.repository.js";
import { findAllPlacedOrdersRepo } from "../model/order.repository.js";
import { updateOrderByIdRepo } from "../model/order.repository.js";

export const updateOrderDetails = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const updateData = req.body;

    const updatedOrder = await updateOrderByIdRepo(orderId, updateData);

    if (!updatedOrder) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, order: updatedOrder });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};


export const getAllPlacedOrders = async (req, res, next) => {
  try {
    const orders = await findAllPlacedOrdersRepo();
    res.status(200).json({ success: true, orders });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};


export const getMyOrders = async (req, res, next) => {
  try {
    const orders = await findOrdersByUserIdRepo(req.user._id);

    if (!orders || orders.length === 0) {
      return res.status(404).json({ success: false, message: "No orders found for this user" });
    }

    res.status(200).json({ success: true, orders });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};



export const getSingleOrder = async (req, res, next) => {
  console.log("getSingleOrder hit with ID:", req.params.id);
  try {
    const order = await findOrderByIdRepo(req.params.id);

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, order });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
 

};


export const createNewOrder = async (req, res, next) => {
 // Write your code here for placing a new order
 try {
  // Assuming you have the necessary data in the request body
  const orderData = req.body;
  // Call the repository function to create a new order

  const newOrder = await createNewOrderRepo({
    ...req.body,
    user: req.user._id,
    paidAt: Date.now(),  
  });
  console.log("Created Order:", newOrder); // 👈 Add this to debug

  // Respond with the created order
  res.status(201).json({
    success: true,
    order: newOrder,
  });
} catch (error) {
  // Handle errors
  ErrorHandler.handle(res, error);
}
};

