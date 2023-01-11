import mongoose, { Schema } from "mongoose";

export interface IUser {
  _id: string;
  email: string;
  name: string;
  phone: string;
  adress: string;
  cpf: string;
}


const userSchema = new Schema<IUser>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  adress: { type: String, required: true },
  cpf: { type: String, required: true },
});


export const User = mongoose.model<IUser>("User", userSchema);