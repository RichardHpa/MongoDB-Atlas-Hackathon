require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { dbConnect } from './database/connection';
import { router } from './controllers/router';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// allow cors requests from any origin and with credentials
app.use(cors({ origin: (_origin, callback) => callback(null, true), credentials: true }));

app.use(function (req, _res, next) {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

if (process.env.DB_CONNECTION === 'true') {
  dbConnect();
}

// api routes
app.use('/api', router);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
