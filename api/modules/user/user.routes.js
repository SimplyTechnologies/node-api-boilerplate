import { Router } from 'express';
import * as userHandlers from './user.handlers';

export function init(api) {
  const router = new Router();

  router.get('/', userHandlers.getAllUsers);

  api.use('/users', router);
}
