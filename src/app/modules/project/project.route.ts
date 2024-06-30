import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { projectValidation } from './project.validation';
import { projectControllers } from './project.controller';

const router = express.Router();

router.post(
  '/addproject',
  auth(),
  validateRequest(projectValidation.projectValidationSchema),
  projectControllers.createProject,
);
router.get('/', auth(), projectControllers.getAllProject);
router.patch(
  '/updateproject/:id',
  auth(),
  validateRequest(projectValidation.projectUpdateValidationSchema),
  projectControllers.updateProjectById,
);
router.patch(
  '/updateprojectImage/:id',
  auth(),
  projectControllers.updateProjectImageById,
);
router.delete('/deleteproject', auth(), projectControllers.deleteProjectById);

export const projectRoutes = router;
