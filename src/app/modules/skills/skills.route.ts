import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { skillValidation } from './skills.validation';
import { skillControllers } from './skills.controller';
const router = express.Router();

router.post(
  '/addskill',
  auth(),
  validateRequest(skillValidation.skillValidationSchema),
  skillControllers.createSkill,
);
router.get('/', auth(), skillControllers.getAllSkill);
router.get('/:id', auth(), skillControllers.getSingleSkill);
router.patch(
  '/updateskill/:id',
  auth(),
  validateRequest(skillValidation.skillUpdateValidationSchema),
  skillControllers.updateSkillById,
);

router.delete('/deleteskill/:id', auth(), skillControllers.deleteSkillById);

export const skillRoutes = router;
