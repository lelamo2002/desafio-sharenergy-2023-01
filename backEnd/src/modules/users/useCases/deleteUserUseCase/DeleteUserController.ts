import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUserUseCase } from "./DeleteUserUseCase";



class DeleteUserController {


  async handle(request: Request, response: Response) {

    const { email } = request.body;

    const deleteUserUseCase = container.resolve(DeleteUserUseCase);

    const users = await deleteUserUseCase.execute(String(email));

    return response.status(200).json(users);

  }
}

export { DeleteUserController };