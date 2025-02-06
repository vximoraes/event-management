import { Event } from './../models/eventModel'
import sqlite3 from "sqlite3"

const db = new sqlite3.Database('./data/eventos.db')

// Ativa a verificação de chaves estrangeiras
db.run('PRAGMA foreign_keys = ON', (error) => {
    if (error) {
        console.log('Erro ao ativar chaves estrangeiras:', error)
    } else {
        console.log('Chaves estrangeiras ativadas com sucesso!')
    }
})

export function createEventTable() {
    const query = `
        CREATE TABLE IF NOT EXISTS events (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            name       TEXT,
            date       TEXT,
            user_id    INTEGER,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )
    `

    db.run(query, (error) => {
        if (error) {
            console.log(`Erro ao criar a tabela: ${error}`)
        } else {
            console.log(`Tabela criada com sucesso!`)
        }
    })
}

export function insertEvent(event: Event): void {
    const query = `
        INSERT INTO events (name, date, user_id)
        VALUES (?, ?, ?)
    `

    db.run(query, [event.name, event.date, event.user.id], function (error) {
        if (error) {
            console.log(`Erro ao inserir evento: ${error}`)
        } else {
            console.log(`Evento ${this.lastID} inserido com sucesso!`)
        }
    })
}

export function listAllEvents() {
    const query = `
        SELECT * FROM events
    `

    db.all(query, (error, linhas) => {
        if (error) {
            console.log(`Erro ao listar eventos: ${error}`)
        } else {
            console.log(linhas)
        }
    })
}

export function listEventById(id: number) {
    const query = `
        SELECT * FROM events WHERE id = ?
    `

    db.get(query, [id], (error, linha) => {
        if (error) {
            console.log(`Erro ao listar evento: ${error}`)
        } else if (linha) {
            console.log(linha)
        } else {
            console.log(`Nenhum evento encontrado pelo id ${id}`)
        }
    })
}

export function updateEventById(event: Event) {
    const query = `
        UPDATE events 
        SET name = ?, date = ?, user_id = ?
        WHERE id = ?
    `

    db.run(query, [event.name, event.date, event.user.id, event.id], function (error) {
        if (error) {
            console.log(`Erro ao alterar evento: ${error}`)
        } else if (this.changes === 0) {
            console.log(`Nenhum evento encontrado pelo id ${event.id}`) 
        } else {
            console.log(`Evento ${event.id} alterado com sucesso!`)
        }
    })
}

export function deleteEvent(id: number) {
    const query = `
        DELETE FROM event WHERE id = ?
    `

    db.run(query, [id], function (erro) {
        if (erro) {
            console.log(`Erro ao deletar evento: ${erro}`)
        } if (this.changes === 0) {
            console.log(`Nenhum evento encontrado pelo id ${id}`)
        } else {
            console.log(`Evento ${id} deletado com sucesso!`)
        }
    })
}