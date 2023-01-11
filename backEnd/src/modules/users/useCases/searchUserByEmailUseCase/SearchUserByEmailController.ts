import { Request, Response } from "express";
import { container } from "tsyringe";
import { SearchUserByEmailUseCase } from "./SearchUserByEmailUseCase";



class SearchUserByEmailController {


  async handle(request: Request, response: Response) {

    const { email } = request.body;

    const searchUserByEmailUseCase = container.resolve(SearchUserByEmailUseCase);

    const users = await searchUserByEmailUseCase.execute(String(email));

    return response.status(200).json(users);

  }
}

export { SearchUserByEmailController };