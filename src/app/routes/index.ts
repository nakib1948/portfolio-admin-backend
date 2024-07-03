import { Router } from 'express';
import { userRoutes } from '../modules/user/user.route';
import { projectRoutes } from '../modules/project/project.route';
import { skillRoutes } from '../modules/skills/skills.route';
import { linkRoutes } from '../modules/links/links.route';
import { blogRoutes } from '../modules/blog/blog.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: userRoutes,
  },
  {
    path: '/project',
    route: projectRoutes,
  },
  {
    path: '/skill',
    route: skillRoutes,
  },
  {
    path: '/link',
    route: linkRoutes,
  },
  {
    path: '/blog',
    route: blogRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
