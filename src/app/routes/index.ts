import { Router } from 'express';
import { userRoutes } from '../modules/user/user.route';
import { projectRoutes } from '../modules/project/project.route';
import { skillRoutes } from '../modules/skills/skills.route';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
