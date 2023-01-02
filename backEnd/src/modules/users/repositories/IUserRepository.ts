
import { ICreateUserDTO } from "../DTOs/ICreateUserDTO";
import { IUser } from "../infra/models/User";



export interface IUserRepository {


  create(data: ICreateUserDTO): Promise<IUser>;

  findByEmail(email: string): Promise<IUser | null>;
  findByUsername(username: string): Promise<IUser | null>;
  findByName(name: string): Promise<IUser[]>;

  list(): Promise<IUser[]>;

}