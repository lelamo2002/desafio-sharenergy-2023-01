import { inject, injectable } from "tsyringe";
import { IUser } from "../../infra/models/User";
import { IUserRepository } from "../../repositories/IUserRepository";


@injectable()
class DeleteUserUseCase {
  constructor(@inject("UserRepository") private userRepository: IUserRepository) { }

  async execute(email: string): Promise<IUser | null> {

    const user = await this.userRepository.deleteUser(email);

    return user;
  }
}

export { DeleteUserUseCase };