import { randomBytes } from 'crypto';

export const randomTokenString = () => randomBytes(40).toString('hex');
