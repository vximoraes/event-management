import { validateUser } from '../validations/userValidation'
import { createUserDb, createUserTableDb, listAllUsersDb, listUserByIdDb } from '../services/userService'
import { User } from '../models/userModel'
import { getCurrentTime } from '../utils/logger'

// Exemplo de como usar nos logs
export async function createUserTable() {
    try {
        const createdTable = await createUserTableDb()

        if (createdTable) {
            console.log(`${getCurrentTime()} - Tabela users criada com sucesso!`)
        }
    } catch (error) {
        console.log(`${getCurrentTime()} - Erro ao criar a tabela users: ${error}`)
    }
}

export async function createUser(name: string, email: string, password: string) {
    const user: User = {
        name,
        email,
        password
    }

    const validation = validateUser(user)

    if (!validation.success) {
        console.log(`${getCurrentTime()} - Erros de validação ao inserir usuário:`)
        validation.error.errors.forEach((err) => {
            console.log(`${getCurrentTime()} - - ${err.path.join(".")}: ${err.message}`)
        })
        return
    }

    try {
        const createdUser = await createUserDb(user)

        if (createdUser) {
            console.log(`${getCurrentTime()} - Usuário inserido com sucesso!`)
        }
    } catch (error) {
        console.log(`${getCurrentTime()} - Erro ao criar usuário: ${error}}`)
    }
}

export async function listAllUsers() {
    try {
        const users = await listAllUsersDb()  

        if (users && users.length > 0) {
            console.log(`${getCurrentTime()} - Usuários cadastrados:`)
            console.log(users)  
        } else {
            console.log(`${getCurrentTime()} - Nenhum usuário encontrado.`)
        }
    } catch (error) {
        console.error(`${getCurrentTime()} - Erro ao listar usuários: ${error}`) 
    }
}

// Funcionando
export async function listUserById(id: number) {
    const user = await listUserByIdDb(id)
    
    try {
        if (user) {
            console.log(`${getCurrentTime()} - Usuário cadastrado:`)
            console.log(user)  
        } else {
            console.log(`${getCurrentTime()} - Nenhum usuário encontrado através do id '${id}'.`)
        }
    } catch (error) {
        console.log(`${getCurrentTime()} - Erro ao listar usuário: ${error}`)
    }
}