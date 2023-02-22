import { QueryResult } from "pg"

interface iUserRequest {
    name: string,
    email: string,
    password: string,
    admin: boolean,
    active: boolean
}

interface iUserReturn extends iUserRequest {
    id: number
}

type UserWithPassword = QueryResult<iUserReturn>

type iUserWithoutPassword = Omit<iUserReturn, 'password'>

type UserResult = QueryResult<iUserWithoutPassword>

export {
    iUserRequest, 
    UserResult,
    iUserWithoutPassword,
    UserWithPassword 
}