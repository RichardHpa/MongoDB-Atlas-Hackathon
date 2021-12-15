require('dotenv').config();
import express from 'express';
// rest of the code remains same
const app = express();

app.get('/', (req, res) => res.send('Welcome to the server'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
