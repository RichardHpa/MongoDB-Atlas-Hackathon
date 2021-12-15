require('dotenv').config();
import mongoose from 'mongoose';

export const connect = () => {
  mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER_NAME}/${process.env.MONGO_TABLE_NAME}?retryWrites=true&w=majority`
  );

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => console.log('we are connected to mongo db'));
};
