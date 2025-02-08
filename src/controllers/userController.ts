import { User } from './../models/userModel';
import { validateUser } from '../validations/userValidation'
import { createUserDb, createUserTableDb, listAllUsersDb, listUserByIdDb, updateUserByIdDb } from '../services/userService'
import { getCurrentTime } from '../utils/logger'

// Funcionando
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

// Funcionando
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

// Funcionando
export async function listAllUsers() {
    try {
        const listedUsers = await listAllUsersDb()

        if (listedUsers && listedUsers.length > 0) {
            console.log(`${getCurrentTime()} - Usuários cadastrados:`)
            console.log(listedUsers)
        } else {
            console.log(`${getCurrentTime()} - Nenhum usuário encontrado.`)
        }
    } catch (error) {
        console.error(`${getCurrentTime()} - Erro ao listar usuários: ${error}`)
    }
}

// Funcionando
export async function listUserById(id: number) {
    try {
        const listedUser = await listUserByIdDb(id)

        if (listedUser) {
            console.log(`${getCurrentTime()} - Usuário com id '${id}':`)
            console.log(listedUser)
        } else {
            console.log(`${getCurrentTime()} - Nenhum usuário encontrado através do id '${id}'.`)
        }
    } catch (error) {
        console.log(`${getCurrentTime()} - Erro ao listar usuário: ${error}`)
    }
}

// Funcionando
export async function updateUserById(id: number, name: string, email: string, password: string) {
    const updateUser: User = {
        id,
        name,
        email,
        password
    }

    const validation = validateUser(updateUser)

    if (!validation.success) {
        console.log(`${getCurrentTime()} - Erros de validação ao atualizar usuário:`)
        validation.error.errors.forEach((err) => {
            console.log(`- ${err.path.join(".")}: ${err.message}`)
        })
        return
    }

    try {
        const updatedUser = await updateUserByIdDb(updateUser)

        if (updatedUser) {
            console.log(`${getCurrentTime()} - Usuário '${updateUser.id}' alterado com sucesso!`)
        } else {
            console.log(`${getCurrentTime()} - Nenhum usuário encontrado através do id '${updateUser.id}.'`);
        }
    } catch (error) {
        console.log(`${getCurrentTime()} - Erro ao alterar usuário: ${error}`);
    }
}