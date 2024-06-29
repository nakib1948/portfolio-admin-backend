import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { userValidation } from './user.validation';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post(
  '/login',
  validateRequest(userValidation.loginValidationSchema),
  UserControllers.loginUser,
);

export const userRoutes = router;
