import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";
import jwt from "jsonwebtoken";

const validateToken = async (request: Request, response: Response, next: NextFunction) => {
    
    const authToken = request.headers.authorization

    if (!authToken) {
        throw new AppError('Missing authorization token', 401);
    }

    const token: string = authToken.split(' ')[1];

    jwt.verify(
        token,
        "SECRET_KEY",
        (error: any, decoded: any) => {
            if (error) {
                throw new AppError(error.message, 401)
            }

            console.log(decoded)
            return next()
        }
    )
}   

export {
    validateToken
}