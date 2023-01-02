import mongoose, { Schema } from "mongoose";

export interface IUser {
  _id: string;
  email: string;
  name: string;
  username: string;
  age: number;
  picture: string;
  password: string;
}


const userSchema = new Schema<IUser>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  age: { type: Number, required: true },
  picture: { type: String, required: true },
  password: { type: String, required: true },
});


export const User = mongoose.model<IUser>("User", userSchema);