import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";



class UpdateUserController {


  async handle(request: Request, response: Response) {

    const { email, newEmail, name, phone, adress, cpf } = request.body;
    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    await updateUserUseCase.execute(email, { email:newEmail, name, phone, adress, cpf });

    return response.status(201).json({ message: "User Updated!" });

  }

}

export { UpdateUserController };