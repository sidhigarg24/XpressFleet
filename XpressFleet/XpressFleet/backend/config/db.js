import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.mongoURI;
export const connectDB = async () => {
  try {
    console.log("db connecting...");
    console.log(url);
 const res = await mongoose.connect(process.env.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`mongodb connected with server ${res.connection.host}`);
  } catch (error) {
    console.log("mongodb connection failed!");
    console.log(error);
  }
};
