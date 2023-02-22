import { UserWithPassword } from "../interfaces/user.interface"
import { iLoginRequest, iToken } from "../interfaces/login.interface"
import { client } from "../database/config"
import { QueryConfig } from "pg"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";
import { AppError } from "../error"

const createLogin = async (loginData: iLoginRequest): Promise<iToken> => {

    const email = loginData.email

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

    const checkIfUserExist = users.find((item) => {
        return item.email === email
    })

    console.log(checkIfUserExist)
    if (checkIfUserExist === undefined) {
        throw new AppError('Invalid email or password!1', 401);
    }

    if (!checkIfUserExist.active) {
        throw new AppError('Invalid email or password!2', 401);
    }

    const checkIfPasswordIsCorrect: boolean = await compare(loginData.password, checkIfUserExist.password)

    if (!checkIfPasswordIsCorrect) {
        throw new AppError('Invalid email or password!3', 401);
    }

    const token: string = sign(
        {email: checkIfUserExist.email},
        String(process.env.SECRET_KEY),
        {expiresIn: '24h', subject: String(checkIfUserExist.id)}
    )

    return { token }
}

export {
    createLogin
}