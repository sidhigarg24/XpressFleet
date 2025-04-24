import OrderModel from "./order.schema.js";

export const createNewOrderRepo = async (data) => {
 // Write your code here for placing a new order
 try {
  const newOrder = await OrderModel.create(data);
  console.log(newOrder);
  return newOrder;
} catch (error) {
  console.log(error); 
  throw error;
}};

export const findOrderByIdRepo = async (orderId) => {
  return await OrderModel.findById(orderId).populate("user");
};

export const findOrdersByUserIdRepo = async (userId) => {
  return await OrderModel.find({ user: userId });
};

export const findAllPlacedOrdersRepo = async () => {
  return await OrderModel.find({}).populate("user");
};

export const updateOrderByIdRepo = async (orderId, updateData) => {
  return await OrderModel.findByIdAndUpdate(orderId, updateData, {
    new: true,
    runValidators: true,
  });
};




