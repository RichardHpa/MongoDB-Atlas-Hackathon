import type { Request, Response } from 'express';

import { UserModel } from 'models/Users';
import { roles } from '_constants/roles';
import { hash } from '_helpers/hash';
import { randomTokenString } from '_helpers/randomTokenString';
import { sendVerificationEmail } from '_helpers/sendEmail';

import type { User } from '_types/models/User';

export const registerUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;

  UserModel.findOne({ email }).then(async userFound => {
    if (userFound) {
      res.status(400).json({
        message: 'User already exists',
      });
    } else {
      const isFirstAccount = (await UserModel.countDocuments({})) === 0;

      const user = new UserModel({
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
}
