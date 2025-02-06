import { User } from "./userModel"

export interface Event {
    id  : string,
    name: string,
    date: Date,
    user: User
}