import { Request, Response, NextFunction } from "express"
import { UserWithPassword } from "../interfaces/user.interface"
import { client } from "../database/config"
import { QueryConfig } from "pg"
import { verify } from "jsonwebtoken";
import { AppError } from "../error";

const validateToken = async (request: Request, response: Response, next: NextFunction) => {
    
    const authToken = request.headers.authorization

    if (!authToken) {
        throw new AppError('Missing authorization token', 401);
    }

    const token: string = authToken.split(' ')[1];

    const queryString = `
    SELECT 
        *
    FROM
        users;
    `

    const queryConfig: QueryConfig = {
        text: queryString
    }

    const queryResult: UserWithPassword = await client.query(queryConfig)

    const users = queryResult.rows

    return verify(
        token,
        String(process.env.SECRET_KEY),
        (error: any, decoded: any) => {
            if (error) {
                throw new AppError(error.message, 401)
            }

            const foundUser = users.find((item) => {
                item.email === decoded.email
            })

            return foundUser
        }
    )
}   

export {
    validateToken
}