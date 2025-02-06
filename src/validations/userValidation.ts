import { z } from "zod"
import { User } from "../models/userModel"

// Define o schema de validação para um usuário
const userSchema = z.object({
    nome : z.string().min(1, "Nome é obrigatório"), // Valida o nome (não vazio)
    email: z.string().email("E-mail inválido"),    // Valida o formato do e-mail
    senha: z
        .string()
        .min(8, "A senha deve ter pelo menos 8 caracteres") // Valida a senha com mínimo de 8 caracteres
        .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula") // Valida se possui letra maiúscula
        .regex(/[!@#$%^&*(),.?":{}|<>]/, "A senha deve conter pelo menos um caractere especial") // Valida a presença de caractere especial
})

// Função para validar o usuário
export function validateUser(user: User) {
    return userSchema.safeParse(user)
}