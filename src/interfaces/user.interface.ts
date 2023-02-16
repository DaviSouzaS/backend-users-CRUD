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

type iUserWithoutPassword = Omit<iUserReturn, 'password'>

type UserResult = QueryResult<iUserReturn>

export {
    iUserRequest, 
    UserResult,
    iUserWithoutPassword 
}