import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUserUseCase/CreateUserController";
import { ListUserController } from "../modules/users/useCases/listUsersUseCase/ListUserController";
import { SearchUserByNameController } from "../modules/users/useCases/searchUserByNameUseCase/SearchUserByNameController";

const usersRoutes = Router();


const createUserController = new CreateUserController();
const listUserController = new ListUserController();
// const searchUserByNameController = new SearchUserByNameController();




usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/list", listUserController.handle);


export { usersRoutes };