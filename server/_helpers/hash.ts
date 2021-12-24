import { hashSync } from 'bcryptjs';

export const hash = (password: string) => hashSync(password, 10);
