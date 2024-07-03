import express from 'express';
import auth from '../../middlewares/auth';
import { linkControllers } from './links.controller';

const router = express.Router();

router.get('/', auth(), linkControllers.getAllLink);
router.patch('/updatelink/:id', auth(), linkControllers.updateLinkById);

export const linkRoutes = router;
