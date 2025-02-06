import { User } from './../models/userModel'
import sqlite3 from "sqlite3"

const db = new sqlite3.Database('./data/eventos.db')

export function createUserTable() {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            name       TEXT,
            email      TEXT,
            password   TEXT
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

export function insertUser(user: User): void {
    const query = `
        INSERT INTO users (name, email, password)
        VALUES (?, ?, ?)
    `

    db.run(query, [user.name, user.email, user.password], function (error) {
        if (error) {
            console.log(`Erro ao inserir usuário: ${error}`)
        } else {
            console.log(`Usuário ${this.lastID} inserido com sucesso!`)
        }
    })
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

export function updateUserById(id: number, user: User) {
    const query = `
        UPDATE users 
        SET name = ?, email = ?, password = ?
        WHERE id = ?
    `

    db.run(query, [user.name, user.email, user.password, id], function (error) {
        if (error) {
            console.log(`Erro ao alterar usuário: ${error}`)
        } else if (this.changes === 0) {
            console.log(`Nenhum usuário encontrado pelo id ${id}`) 
        } else {
            console.log(`Usuário ${id} alterado com sucesso!`)
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