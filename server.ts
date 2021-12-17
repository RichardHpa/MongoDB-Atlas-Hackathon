require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { connect } from './database/connection';
import { routes } from './routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));

app.use(function (req, res, next) {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

if (process.env.DB_CONNECTION === 'true') {
  connect();
}

// api routes
app.get('/', (req, res) => res.send('Welcome to the api server'));
app.use('/api', routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
