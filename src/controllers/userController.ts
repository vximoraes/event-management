import { validateUser } from '../validations/userValidation'
import { createUserDb, createUserTableDb, listAllUsersDb } from '../services/userService'
import { User } from '../models/userModel'

// Funcionando
export async function createUserTable() {
    try {
        const createdTable = await createUserTableDb()

        if (createdTable) {
            console.log(`\nTabela users criada com sucesso!`)
        }
    } catch (error) {
        console.log(`\nErro ao criar a tabela users: ${error}`)
    }
}

// Funcionando
export async function createUser(name: string, email: string, password: string) {
    const user: User = {
        name,
        email,
        password
    }

    const validation = validateUser(user)

    if (!validation.success) {
        console.log("\nErros de validação ao inserir usuário:")
        validation.error.errors.forEach((err) => {
            console.log(`- ${err.path.join(".")}: ${err.message}`)
        })
        return
    }

    try {
        const createdUser = await createUserDb(user)

        if (createdUser) {
            console.log(`\nUsuário inserido com sucesso!`)
        }
    } catch (error) {
        console.log(`\nErro ao criar usuário: ${error}}`)
    }
}

// Funcionando
export async function listAllUsers() {
    try {
        const users = await listAllUsersDb()  

        if (users && users.length > 0) {
            console.log(`\nUsuários cadastrados:`)
            console.log(users)  
        } else {
            console.log('Nenhum usuário encontrado.')
        }
    } catch (error) {
        console.error(error) 
    }
}