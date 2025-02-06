import { User } from './../models/userModel'
import sqlite3 from "sqlite3"

const db = new sqlite3.Database('./data/database.db')

export function createUserTableDb() {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            name       TEXT,
            email      TEXT,
            password   TEXT
        )
    `

    db.run(query)
}

export function createUserDb(user: User): void {
    const query = `
        INSERT INTO users (name, email, password)
        VALUES (?, ?, ?)
    `

    db.run(query, [user.name, user.email, user.password])
}

export function listAllUsers() {
    const query = `
        SELECT * FROM users
    `

    db.all(query, (error, linhas) => {
        if (error) {
            console.log(`Erro ao listar usuários: ${error}`)
        } else {
            console.log(linhas)
        }
    })
}

export function listUserById(id: number) {
    const query = `
        SELECT * FROM users WHERE id = ?
    `

    db.get(query, [id], (error, linha) => {
        if (error) {
            console.log(`Erro ao listar usuário: ${error}`)
        } else if (linha) {
            console.log(linha)
        } else {
            console.log(`Nenhum usuário encontrado pelo id ${id}`)
        }
    })
}

export function updateUserById(user: User) {
    const query = `
        UPDATE users 
        SET name = ?, email = ?, password = ?
        WHERE id = ?
    `

    db.run(query, [user.name, user.email, user.password, user.id], function (error) {
        if (error) {
            console.log(`Erro ao alterar usuário: ${error}`)
        } else if (this.changes === 0) {
            console.log(`Nenhum usuário encontrado pelo id ${user.id}`) 
        } else {
            console.log(`Usuário ${user.id} alterado com sucesso!`)
        }
    })
}

export function deleteUser(id: number) {
    const query = `
        DELETE FROM users WHERE id = ?
    `

    db.run(query, [id], function (erro) {
        if (erro) {
            console.log(`Erro ao deletar usuário: ${erro}`)
        } if (this.changes === 0) {
            console.log(`Nenhum usuário encontrado pelo id ${id}`)
        } else {
            console.log(`Usuário ${id} deletado com sucesso!`)
        }
    })
}