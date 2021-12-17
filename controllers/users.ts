require('dotenv').config();
import type { Request, Response } from 'express';
import { Router } from 'express';
import { Users } from '../models/Users';
import { roles } from '../_helpers/roles';
import bcrypt from 'bcryptjs';
import { sendEmail } from '../_helpers/sendEmail';
import crypto from 'crypto';

import type { User } from '../_types/User';

const userRoutes = Router();

userRoutes.post('/register', async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;

  Users.findOne({ email }).then(async userFound => {
    if (userFound) {
      res.status(400).json({
        message: 'User already exists',
      });
    } else {
      const isFirstAccount = (await Users.countDocuments({})) === 0;

      const user = new Users({
        firstName,
        lastName,
        email,
        role: isFirstAccount ? roles.ADMIN : roles.USER,
      });
      user.password = hash(password);
      user.verificationToken = randomTokenString();

      return user
        .save()
        .then(async (newUser: User) => {
          sendVerificationEmail(newUser, `${process.env.API_HOST}/api/users`);
          return res.json({
            message:
              'Registration successful, please check your email for verification instructions',
          });
        })
        .catch((error: any) => {
          return res.status(500).json({
            message: error.message,
          });
        });
    }
  });
});

userRoutes.get('/verify-email', (req: Request, res: Response) => {
  res.send('verify-email');
});

userRoutes.post('/login', (req: Request, res: Response) => {
  res.send('login');
});

function hash(password: string) {
  return bcrypt.hashSync(password, 10);
}

function randomTokenString() {
  return crypto.randomBytes(40).toString('hex');
}

async function sendVerificationEmail(account: User, origin: string) {
  let message;
  if (origin) {
    const verifyUrl = `${origin}/verify-email?token=${account.verificationToken}`;
    message = `<p>Please click the below link to verify your email address:</p>
                 <p><a href="${verifyUrl}" target="_blank">${verifyUrl}</a></p>`;
  } else {
    message = `<p>Please use the below token to verify your email address with the <code>/account/verify-email</code> api route:</p>
                 <p><code>${account.verificationToken}</code></p>`;
  }

  await sendEmail({
    to: account.email,
    subject: 'Sign-up Verification API - Verify Email',
    html: `<h4>Verify Email</h4>
             <p>Thanks for registering!</p>
             ${message}`,
  });
}

export { userRoutes };
