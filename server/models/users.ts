import { Schema, model } from 'mongoose';
import type { User } from '_types/models/User';

const schema = new Schema<User>({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  acceptTerms: Boolean,
  role: {
    type: String,
    required: true
  },
  verificationToken: String,
  verified: Date,
  resetToken: {
    token: String,
    expires: Date,
  },
  passwordReset: Date,
  created: {
    type: Number,
    default: Date.now
  },
  updated: Date,
});

export const UserModel = model<User>('User', schema);
