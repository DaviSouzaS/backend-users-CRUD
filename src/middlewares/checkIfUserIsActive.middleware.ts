import { Request, Response, NextFunction } from "express"
import { QueryConfig, QueryResult } from "pg"
import { client } from "../database/config"
import { AppError } from "../error"

const checkIfUserIsActive = async (request: Request, response: Response, next: NextFunction) => {

    const idParams: string = request.params.id

    const queryString: string = 
    `
    SELECT 
        "active"
    FROM
        users
    WHERE id = $1;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [idParams]
    }

    const queryResult: QueryResult = await client.query(queryConfig)

    const userStatus = queryResult.rows[0].active

    if (userStatus) {
        throw new AppError("User already active", 400)
    }

    return next ()
}

export {
    checkIfUserIsActive
}