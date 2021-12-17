import { Schema, model } from 'mongoose';

interface RefreshToken {
  isExpired: any;
  account: Object;
  token: string;
  expires: number;
  created: string;
  createdByIp: string;
  revoked: string;
  revokedByIp: string;
  replacedByToken: string;
}

const schema = new Schema({
  account: { type: Schema.Types.ObjectId, ref: 'User' },
  token: String,
  expires: Date,
  created: { type: Date, default: Date.now },
  createdByIp: String,
  revoked: Date,
  revokedByIp: String,
  replacedByToken: String,
});

schema.virtual('isExpired').get(function (this: RefreshToken) {
  return Date.now() >= this.expires;
});

schema.virtual('isActive').get(function (this: RefreshToken) {
  return !this.revoked && !this.isExpired;
});

const RefreshToken = model('RefreshToken', schema);

export { RefreshToken };
