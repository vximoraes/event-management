import { z } from "zod";  
import { Event } from "../models/eventModel"

// Define o schema de validação para um evento  
export const eventSchema = z.object({  
    name: z.string().min(1, "Nome é obrigatório"), // Valida a data (não vazio) 
    user_id: z.number().int().positive("O ID do usuário deve ser um número positivo") // Valida o ID do usuário como um número inteiro positivo  
})

// Função para validar o evento  
export function validateEvent(event: Event) {  
    return eventSchema.safeParse(event)
} 