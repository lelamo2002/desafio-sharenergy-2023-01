import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";



class CreateUserController {


  async handle(request: Request, response: Response) {

    const { email, name, phone, adress, cpf } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({ email, name, phone, adress, cpf });

    return response.status(201).json({ message: "User created!" });

  }

}

export { CreateUserController };