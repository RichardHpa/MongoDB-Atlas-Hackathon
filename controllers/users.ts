import type { Request, Response } from 'express';
import { Router } from 'express';

const userRoutes = Router();

userRoutes.post('/register', (req: Request, res: Response) => {
  res.send('register');
});

userRoutes.post('/login', (req: Request, res: Response) => {
  res.send('login');
});

export { userRoutes };
