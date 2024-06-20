import { Router } from 'express';
import { UserController } from '../modules/user/user.controller';

const router = Router();
const userController = new UserController();

router.post('/user', userController.post);

export default router;
