import type { Request, Response } from 'express';

export const verifyEmail = (_req: Request, res: Response) => res.send('verify-email');
