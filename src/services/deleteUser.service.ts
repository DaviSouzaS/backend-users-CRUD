import { client } from "../database/config"
import { QueryConfig } from "pg"

const deleteUser = async (userID: string): Promise<void> => {

    const queryString = `
    UPDATE users
    SET 
        "active" = false
    WHERE
        id = $1;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [userID]
    }

    await client.query(queryConfig)
}

export {
    deleteUser
}