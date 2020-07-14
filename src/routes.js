import { Router } from 'express';

const routes = new Router();

import UserController from './app/controllers/UserController';
import PostController from './app/controllers/PostController';

routes.get('/users/:id', UserController.show);
routes.get('/users', UserController.index);

routes.get('/posts', PostController.index);
routes.get('/posts/:postId', PostController.show);

export default routes;
