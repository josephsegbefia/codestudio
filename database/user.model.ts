import mongoose, { Schema, model, models, Document } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phoneNumber: string;
  linkedIn: string;
  github: string;
}

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  linkedIn: { type: String, required: true },
  github: { type: String, required: true },
});

const User = models.User || model('User', UserSchema);

export default User;
