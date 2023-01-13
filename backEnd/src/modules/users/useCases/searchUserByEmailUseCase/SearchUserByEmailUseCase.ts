import { inject, injectable } from "tsyringe";
import { IUser } from "../../infra/models/User";
import { IUserRepository } from "../../repositories/IUserRepository";


@injectable()
class SearchUserByEmailUseCase {
  constructor(@inject("UserRepository") private userRepository: IUserRepository) { }

  async execute(email: string): Promise<IUser| null> {

    const user = await this.userRepository.findByEmail(email);

    return user;
  }
}

export { SearchUserByEmailUseCase };