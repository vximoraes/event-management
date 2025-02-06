import { validateUser } from '../validations/userValidation'
import { insertUser } from '../services/userService'
import { User } from '../models/userModel'

export function createUser(name: string, email: string, password: string) {
    const user: User = { 
        name, 
        email, 
        password 
    }

    const validation = validateUser(user)

    if (!validation.success) {
        console.log("Erro de validação:", validation.error.errors)
        return 
    }

    insertUser(user)
} 