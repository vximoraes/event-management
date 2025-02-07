import { User } from './../models/userModel'
import sqlite3 from "sqlite3"

const db = new sqlite3.Database('./data/database.db')

// Funcionando
export function createUserTableDb(): Promise<boolean> {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            name       TEXT,
            email      TEXT,
            password   TEXT
        )
    `

    return new Promise((resolve, reject) => {
        db.run(query, (error) => {
            if (error) {
                reject(error)
            } else {
                resolve(true)
            }
        })
    })
}

// Funcionando
export function createUserDb(user: User): Promise<boolean> {
    const query = `
        INSERT INTO users (name, email, password)
        VALUES (?, ?, ?)
    `

    return new Promise((resolve, reject) => {
        db.run(query, [user.name, user.email, user.password], function (error) {
            if (error) {
                reject(error)
            } else {
                resolve(true)
            }
        })
    })
}

// Funcionando
export function listAllUsersDb(): Promise<any[]> {
    const query = `
        SELECT * FROM users
    `

    return new Promise((resolve, reject) => {
        db.all(query, (error, rows) => {
            if (error) {
                reject(error)
            }
            resolve(rows)
        })
    })
}

export function listUserByIdDb(id: number) {
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

export function updateUserByIdDb(user: User) {
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

export function deleteUserDb(id: number) {
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