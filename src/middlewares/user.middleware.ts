import { Response, Request, NextFunction } from "express"
import { ZodTypeAny } from "zod";
import { client } from "../database/config"
import { AppError } from "../error";

const checkIfEmailIsUnique = async (request: Request, response: Response, next: NextFunction) => {

    const email: string = request.body.email

    const queryString: string = 
    `
    SELECT 
        *
    FROM
        users;
    `

    const queryResult = await client.query(queryString)

    const allUsers = queryResult.rows

    const foundEmail = allUsers.find((item) => {
        return item.email === email
    })

    if (foundEmail !== undefined) {
        throw new AppError("E-mail already registered", 409)
    }

    return next()
}

const validateData = (schema: ZodTypeAny) => (request: Request, response: Response, next: NextFunction) => {
    
    const validate = schema.parse(request.body)

    request.body = validate

    return next()
}

export {
    checkIfEmailIsUnique,
    validateData
}