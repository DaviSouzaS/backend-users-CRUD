import { iUserUpdateRequest, UserUpdateResult } from "../interfaces/updateUser.interface"
import format from "pg-format"
import { QueryConfig } from "pg"
import { client } from "../database"

const updateUserService = async (updateUserData: iUserUpdateRequest, userID: string): Promise<iUserUpdateRequest> => {

    const queryString: string = `
    UPDATE users
        SET(%I) = ROW(%L)
    WHERE id = $1
        RETURNING id, name, email, admin, active;
    `

    const queryFormat = format(queryString, Object.keys(updateUserData), Object.values(updateUserData))
    
    const queryConfig: QueryConfig = {
        text: queryFormat,
        values: [userID]
    }

    const queryResult: UserUpdateResult = await client.query(queryConfig)

    return queryResult.rows[0]
}

export {
    updateUserService
}