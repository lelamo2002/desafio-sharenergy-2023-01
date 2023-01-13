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

  async execute({ email, name, phone, adress, cpf }: ICreateUserDTO): Promise<IUser> {

    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      console.log(email);
      console.log(userAlreadyExists);
      throw new AppError("User already exists!");
    }

    const user = await this.userRepository.create({ email, name, phone, adress, cpf });

    return user;
  }

}

export { CreateUserUseCase };