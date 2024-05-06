import express from 'express';
import {
  getUsers,
  getUserByID,
  deleteUser,
  updateUser,
  authUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfile,
  getUserByEmail,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleWare.js';

const router = express.Router();

// Register user and get all users
router.route('/').post(registerUser).get(protect, getUsers);

// Logout, login, and get user profile
router.post('/logout', logOutUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

// Get user by ID, delete user, and update user
router.route('/:id').get(protect, getUserByID).delete(protect, deleteUser).put(protect, updateUser);

// New route to get user by email
router.route('/email/:email').get(protect, getUserByEmail);

export default router;
