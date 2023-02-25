import { Response, Request, NextFunction } from "express"
import { client } from "../database/config"
import { AppError } from "../error"
import { QueryResult } from "pg"
import { ZodTypeAny } from "zod"

const checkIfEmailIsUnique = async (request: Request, response: Response, next: NextFunction): Promise <Response | void> => {

    const email: string = request.body.email

    const queryString: string = 
    `
    SELECT 
        *
    FROM
        users;
    `

    const queryResult: QueryResult = await client.query(queryString)

    const allUsers = queryResult.rows

    const foundEmail = allUsers.find((item) => {
        return item.email === email
    })

    if (foundEmail !== undefined) {
        throw new AppError("E-mail already registered", 409)
    }

    return next()
}

const validateData = (schema: ZodTypeAny) => (request: Request, response: Response, next: NextFunction): void => {
    
    const validate = schema.parse(request.body)

    request.body = validate

    return next()
}

export {
    checkIfEmailIsUnique,
    validateData
}