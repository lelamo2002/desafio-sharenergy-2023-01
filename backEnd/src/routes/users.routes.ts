import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUserUseCase/CreateUserController";
import { DeleteUserController } from "../modules/users/useCases/deleteUserUseCase/DeleteUserController";
import { ListUserController } from "../modules/users/useCases/listUsersUseCase/ListUserController";
import { SearchUserByEmailController } from "../modules/users/useCases/searchUserByEmailUseCase/SearchUserByEmailController";
import { UpdateUserController } from "../modules/users/useCases/updateUserUseCase/UpdateUserController";

const usersRoutes = Router();


const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController();
const searchUserByEmailController = new SearchUserByEmailController();
const updateUserController = new UpdateUserController();
// const searchUserByEmailController = new SearchUserByEmailController();




usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/list", listUserController.handle);
usersRoutes.delete("/", deleteUserController.handle);
usersRoutes.get("/search", searchUserByEmailController.handle);
usersRoutes.put("/update", updateUserController.handle);



export { usersRoutes };