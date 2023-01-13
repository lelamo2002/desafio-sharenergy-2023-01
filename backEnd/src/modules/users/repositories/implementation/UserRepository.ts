
import { ICreateUserDTO } from "../../DTOs/ICreateUserDTO";
import { IUserRepository } from "../IUserRepository";
import { IUser, User } from "../../infra/models/User";



class UserRepository implements IUserRepository {

  async create(data: ICreateUserDTO): Promise<IUser> {

    const user = await User.create(data);

    return user;
  }


  async findByEmail(email: string): Promise<IUser | null> {

    const user = await User.findOne({
      email: email,

    })

    return user;
  }
  async findByUsername(username: string): Promise<IUser | null> {

    const user = await User.findOne({
      username: username,

    })

    return user;
  }
  async findByName(name: string): Promise<IUser[]> {

    const users = await User.find({ name: { $regex: name, $options: 'i' } })

    return users;
  }
  async list(): Promise<IUser[]> {

    const users = await User.find();

    return users;
  }

  async updateUser(email:string, data: ICreateUserDTO): Promise<IUser | null> {
      
      const user = await User.findOneAndUpdate({
        email: email,
      }, data
      )

      return user;
  }

  async deleteUser(email:string): Promise<IUser | null> {
        
      const user = await User.findOneAndDelete({
        email: email,
      })

      return user;
  }

}

export { UserRepository };