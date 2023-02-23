import { Request, Response, NextFunction } from "express"
import { client } from "../database/config"
import { AppError } from "../error"
import { QueryResult } from "pg"

const checkIfUserExist = async (request: Request, response: Response, next: NextFunction) => {

    const idParams: number = parseInt(request.params.id)

    const queryString: string = 
    `
    SELECT 
        *
    FROM
        users;
    `

    const queryResult: QueryResult = await client.query(queryString)

    const allUsers = queryResult.rows
    
    const foundUser = allUsers.find((item) => {
        return item.id === idParams
    })

    if (!foundUser) {
        throw new AppError("User not found", 404)
    }

    return next()
}

export {
    checkIfUserExist
}