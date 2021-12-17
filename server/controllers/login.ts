import type { Request, Response } from 'express';

export const login = (_req: Request, res: Response) => res.send('login');
