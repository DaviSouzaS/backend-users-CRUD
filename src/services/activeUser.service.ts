import { client } from "../database/config"
import { QueryConfig, QueryResult } from "pg"
import { iUserWithoutPassword } from "../interfaces/user.interface"

const activeUserService = async (UserID:string): Promise<iUserWithoutPassword> => {

    const queryString = `
    UPDATE users
    SET 
        "active" = true
    WHERE
        id = $1
    RETURNING id, name, email, admin, active;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [UserID]
    }

    const queryResult: QueryResult = await client.query(queryConfig)

    return queryResult.rows[0]
}

export {
    activeUserService
}