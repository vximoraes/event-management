import { createEvent, createEventTable, deleteEvent, listAllEvents, listEvent, updateEvent } from "./controllers/eventController"
import { createLogsTable } from "./controllers/logController"
import { createUser, createUserTable, deleteUser, listAllUsers, listUser, updateUser } from "./controllers/userController"
import { main } from './cli/cli';  

// ------------- Logs ------------

// Criar a tabela de logs
createLogsTable()

// ------------ Users ------------

// Criar a tabela de usuários
createUserTable()

// Criar user 1
// createUser("Vini", "vinicius@gmail.com", "12345678@Senha")

// Listar todos os usuários
// listAllUsers()

// Consultar um usuário específico
// listUser(1)

// Atualizar o usuário de ID 1
// updateUser(1, "Vinícius Moraes", "viniciusmoraesvha@gmail.com", "#Senha1800VX")

// Criar user 2
// createUser("Vini2", "vinicius2@gmail.com", "12345678@Senha2")

// Deletar o usuário de ID 7
// deleteUser(2)

// Listar todos os usuários após alterações
// listAllUsers()

// ----------- Eventos -----------

// Criar a tabela de eventos
createEventTable()

// Criar um evento
// createEvent("Meu evento", new Date(), 1)

// Listar todos os eventos
// listAllEvents()

// Consultar um evento específico
// listEvent(1)

// Atualizar o evento de ID 1
// updateEvent(1, "Evento Alterado", new Date(), 2)

// Deletar o evento de ID 6
// deleteEvent(1)

// Chama a função principal da CLI  
main()