import { QueryResult } from "pg"

interface iUserUpdateRequest {
    name?: string,
    email?: string,
    password?: string,
    admin?: boolean,
    active?: boolean
}

type UserUpdateResult = QueryResult<iUserUpdateRequest>

export {
    iUserUpdateRequest,
    UserUpdateResult
}