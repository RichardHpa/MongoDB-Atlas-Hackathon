require('dotenv').config();
import { Router } from 'express';
import { userRoutes } from './controllers/Users';
import { Users } from './models/users';
import { RefreshToken } from './models/refreshToken';

const routes = Router();

routes.use('/users', userRoutes);

routes.delete('/bomb', (req, res) => {
  Users.findOne({ email: process.env.USER_EMAIL }).then(async userFound => {
    if (userFound) {
      userFound.remove();
    }
    res.send('Boom!');
  });
});

export { routes };
