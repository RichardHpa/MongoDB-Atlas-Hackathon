import { Schema, model } from 'mongoose';
import type { User as UserType } from '../_types/User';

const schema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  acceptTerms: Boolean,
  role: { type: String, required: true },
  verificationToken: String,
  verified: Date,
  resetToken: {
    token: String,
    expires: Date,
  },
  passwordReset: Date,
  created: { type: Date, default: Date.now },
  updated: Date,
});

schema.virtual('isVerified').get(function (this: UserType) {
  return !!(this.verified || this.passwordReset);
});

const Users = model('Users', schema);

export { Users };
