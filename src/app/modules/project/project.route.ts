import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { productControllers } from './project.controller';
import { projectValidation } from './project.validation';

const router = express.Router();

router.post(
  '/addproject',auth(),
  validateRequest(projectValidation.projectValidationSchema),
  productControllers.createProject,
);
 router.get('/',auth(), productControllers.getAllProject);
// router.patch(
//   '/updatebook/:id',
//   validateRequest(productValidation.updateProductValidationSchema),
//   productControllers.updateProductById,
// );
// router.delete('/deletebook', productControllers.deleteProductById);

export const projectRoutes = router;
