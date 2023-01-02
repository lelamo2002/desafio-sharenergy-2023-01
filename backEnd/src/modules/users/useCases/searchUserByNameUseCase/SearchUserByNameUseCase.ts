import { inject, injectable } from "tsyringe";
import { IUser } from "../../infra/models/User";
import { IUserRepository } from "../../repositories/IUserRepository";


@injectable()
class SearchUserByNameUseCase {
  constructor(@inject("UserRepository") private userRepository: IUserRepository) { }

  async execute(name: string): Promise<IUser[]> {

    const user = await this.userRepository.findByName(name);

    return user;
  }
}

export { SearchUserByNameUseCase };