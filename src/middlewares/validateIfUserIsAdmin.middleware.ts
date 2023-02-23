import { Request, Response, NextFunction } from "express"
import { client } from "../database/config"
import { AppError } from "../error"
import { QueryConfig, QueryResult } from "pg"

const checkIfUserIsAdmin = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const UserID: string = request.user.id

    const queryString: string = `
    SELECT
        admin
    FROM
        users
    WHERE
        id = $1;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [UserID]
    }

    const queryResult: QueryResult = await client.query(queryConfig)

    const userStatus: boolean = queryResult.rows[0].admin

    if (!userStatus) {
        throw new AppError("Insufficient Permission", 403)
    }

    return next()
}

export {
    checkIfUserIsAdmin
}