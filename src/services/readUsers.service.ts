import { UserResult, iUserWithoutPassword } from "../interfaces/user.interface"
import { client } from "../database/config"
import { QueryConfig } from "pg"

const readUsersService = async (): Promise<iUserWithoutPassword[]> => {

    const queryString: string = `
    SELECT
        id, name, email, admin, active
    FROM
        users;
    `

    const queryConfig: QueryConfig = {
        text: queryString
    }

    const queryResult: UserResult = await client.query(queryConfig)

    return queryResult.rows
}

export {
    readUsersService
}