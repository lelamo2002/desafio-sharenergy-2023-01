import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../DTOs/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IUser } from "../../infra/models/User";

@injectable()
class ListUsersUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(): Promise<IUser[]> {



    const user = await this.userRepository.list();

    return user;
  }

}

export { ListUsersUseCase };