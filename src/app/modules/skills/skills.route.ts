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
router.patch(
  '/updateskill/:id',
  auth(),
  validateRequest(skillControllers.updateSkillById),
  skillControllers.updateSkillById,
);

router.delete('/deleteskill', auth(), skillControllers.deleteSkillById);

export const skillRoutes = router;
