require('dotenv').config();
import express from 'express';
import { connect } from './database/connection';

const app = express();

connect();

app.get('/', (req, res) => res.send('Welcome to the server'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
