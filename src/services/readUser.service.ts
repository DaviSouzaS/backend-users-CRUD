import { client } from "../database/config"
import { QueryConfig } from "pg"
import { UserResult, iUserWithoutPassword } from "../interfaces/user.interface"

const readUserService = async (userID: string): Promise<iUserWithoutPassword[]> => {

    const queryString: string = `
    SELECT
        id, name, email, admin, active
    FROM
        users
    WHERE
        id = $1 ;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [userID]
    }

    const queryResult: UserResult = await client.query(queryConfig)

    return queryResult.rows
}

export {
    readUserService
}