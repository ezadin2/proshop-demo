import express from 'express';
import {
    addOrderItems,
    getOrders,
    getMyOrders,
    getUserById,
    updateOrderToPaid,
    updateOrderToDelivered,
} from '../controllers/orderController.js';

const router = express.Router();

router.route('/').post(addOrderItems).get(getOrders);
router.route('/mine').get(getMyOrders); // Route for getting user's orders
router.route('/:id').get(getUserById);
router.route('/:id/pay').put(updateOrderToPaid);
router.route('/:id/deliver').put(updateOrderToDelivered);

export default router;
