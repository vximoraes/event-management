import { validateUser } from '../validations/userValidation'
import { createUserTableDb, createUserDb } from '../services/userService'
import { User } from '../models/userModel'

export function createUserTable() {
    try {
        createUserTableDb()
    } catch (error) {
        console.log(`Erro ao criar a tabela: ${error}`)
    }

    console.log(`Tabela criada com sucesso!`)
}

export function createUser(name: string, email: string, password: string) {
    const user: User = { 
        name, 
        email, 
        password 
    }

    // Valida o usuário
    const validation = validateUser(user)

    // Se a validação falhar, exibe os erros e retorna
    if (!validation.success) {
        console.log("Erros de validação:")
        validation.error.errors.forEach((err) => {
            console.log(`- ${err.path.join(".")}: ${err.message}`)
        })
        return
    }

    // Tenta criar o usuário no banco de dados
    try {
        createUserDb(user);
        console.log("Usuário criado com sucesso!");
    } catch (error) {
        console.log(`Erro ao criar usuário: ${error instanceof Error ? error.message : "Erro desconhecido."}`);
    }
}