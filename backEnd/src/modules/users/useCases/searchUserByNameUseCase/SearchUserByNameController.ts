import { Request, Response } from "express";
import { container } from "tsyringe";
import { SearchUserByNameUseCase } from "./SearchUserByNameUseCase";



class SearchUserByNameController {


  async handle(request: Request, response: Response) {

    const { name } = request.query;

    const searchUserByNameUseCase = container.resolve(SearchUserByNameUseCase);

    const users = await searchUserByNameUseCase.execute(String(name));

    return response.status(200).json(users);

  }
}

export { SearchUserByNameController };