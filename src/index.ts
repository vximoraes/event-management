import { createUser, createUserTable } from "./controllers/userController";
import { listAllUsers } from "./services/userService";

createUserTable()
createUser("", "viniciusmoraesvhagmail.com", "Senha123456")
listAllUsers()
