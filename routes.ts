import { Router } from 'express';
import { userRoutes } from './controllers/Users';

const routes = Router();

routes.use('/users', userRoutes);

export { routes };
