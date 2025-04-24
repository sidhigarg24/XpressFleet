import express from "express";
import { createNewOrder, getSingleOrder, getMyOrders, getAllPlacedOrders, updateOrderDetails } from "../controllers/order.controller.js";



import { auth } from "../../../middlewares/auth.js";

const router = express.Router();
router.route("/update/:id").put(auth, updateOrderDetails);
router.route("/orders/placed").get(auth, getAllPlacedOrders);

router.route("/my/orders").get(auth, getMyOrders);

router.route("/new").post(auth, createNewOrder);
// Route to get a single order by ID
router.route("/:id").get(auth, getSingleOrder);

export default router;
