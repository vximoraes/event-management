import sqlite3 from "sqlite3"
import { Event } from './../models/eventModel'
import { formatEventDate } from "../utils/dateUtils"

const db = new sqlite3.Database('./data/database.db')

// Ativa a verificação de chaves estrangeiras
db.run('PRAGMA foreign_keys = ON')

// Funcionando
export function createEventTableDb(): Promise<boolean> {
    const query = `
        CREATE TABLE IF NOT EXISTS events (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            name       TEXT,
            date       TEXT,
            user_id    INTEGER,
            FOREIGN KEY (user_id) REFERENCES users(id)
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
export function createEventDb(event: Event): Promise<any> {
    const query = `
        INSERT INTO events (name, date, user_id)
        VALUES (?, ?, ?)
    `

    return new Promise((resolve, reject) => {
        const formattedDate = formatEventDate(event.date)
        db.run(query, [event.name, formattedDate, event.user_id], function (error) {
            if (error) {
                reject(error)
            } else {
                resolve(true)
            }
        })
    })
}

// Funcionando
export function listAllEventsDb(): Promise<any[]> {
    const query = `
        SELECT * FROM events
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

// Funcionando
export function listEventDb(id: number): Promise<any> {
    const query = `
        SELECT * FROM events WHERE id = ?
    `

    return new Promise((resolve, reject) => {
        db.get(query, [id], (error, row) => {
            if (error) {
                reject(error)
            } else if (row) {
                resolve(row)
            } else {
                resolve(null)
            }
        })
    })
}

// Funcionando
export function updateEventDb(event: Event): Promise<any> {
    const query = `
        UPDATE events 
        SET name = ?, date = ?, user_id = ?
        WHERE id = ?
    `

    return new Promise((resolve, reject) => {
        const formattedDate = formatEventDate(event.date)
        db.run(query, [event.name, formattedDate, event.user_id, event.id], function (error) {
            if (error) {
                reject(error)
            } else if (this.changes === 0) {
                resolve(false)
            } else {
                resolve(true)
            }
        })
    })
}

// Funcionando
export function deleteEventDb(id: number): Promise<any> {
    const query = `
        DELETE FROM events WHERE id = ?
    `

    return new Promise((resolve, reject) => {
        db.run(query, [id], function (error) {
            if (error) {
                reject(error)
            } else if (this.changes === 0) {
                resolve(false)
            } else {
                resolve(true)
            }
        })
    })
}