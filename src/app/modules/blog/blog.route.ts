import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { blogValidation } from './blog.validation';
import { blogControllers } from './blog.controller';
const router = express.Router();

router.post(
  '/addblog',
  auth(),
  validateRequest(blogValidation.blogValidationSchema),
  blogControllers.createBlog,
);
router.get('/', auth(), blogControllers.getAllBlog);
router.delete('/deleteblog/:id', auth(), blogControllers.deleteBlogById);

export const blogRoutes = router;
