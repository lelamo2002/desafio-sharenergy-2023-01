import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../DTOs/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IUser } from "../../infra/models/User";

@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute({ name, email, password, username, age, picture }: ICreateUserDTO): Promise<IUser> {

    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      console.log(email);
      console.log(userAlreadyExists);
      throw new AppError("User already exists!");
    }

    const userNameAlreadyExists = await this.userRepository.findByUsername(username);

    if (userNameAlreadyExists) {
      throw new AppError("Username already taken!");
    }


    const user = await this.userRepository.create({ name, email, password, username, age, picture });

    return user;
  }

}

export { CreateUserUseCase };