import { createEvent, createEventTable, deleteEvent, listAllEvents, listEvent, updateEvent } from "./controllers/eventController";
import { createUser, createUserTable, deleteUser, listAllUsers, listUser, updateUser } from "./controllers/userController";

//createUserTable()
//createUser("Vini", "vinicius@gmail.com", "12345678@Senha")
//listAllUsers()
//listUser(1)
//updateUser(4, "Vinícius Moraes", "viniciusmoraesvha@gmail.com", "#Senha1800VX")
//deleteUser(7)
//listAllUsers()

//createEventTable()
//createEvent("Meu evento", new Date, 10)
//listAllEvents()
//listEvent(12)
//updateEvent(16, "Evento Alterado", new Date, 10)
deleteEvent(5)