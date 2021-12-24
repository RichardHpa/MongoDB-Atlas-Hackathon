import { Router } from 'express';

import { login } from './login';
import { registerUser } from './registerUser';
import { verifyEmail } from './verifyEmail';

require('dotenv').config();

const router = Router();

router.post('/register', registerUser);
router.get('/verify-email', verifyEmail);
router.post('/login', login);

export { router };
