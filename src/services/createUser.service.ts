import {iUserRequest, UserResult, iUserWithoutPassword} from "../interfaces/user.interface";
import { client } from "../database/config";
import { createUserSchema } from "../schemas/user.schemas"
import format from "pg-format";

const createUserService = async (userData: iUserRequest): Promise<iUserWithoutPassword> => {

  const validateUserData = createUserSchema.parse(userData)

  const queryString: string = format(
    `
    INSERT INTO
      users(%I)
    VALUES(%L)
      RETURNING id, name, email, admin, active
    `,
    Object.keys(validateUserData),
    Object.values(validateUserData)
  )

  const queryResult: UserResult = await client.query(queryString)

  return queryResult.rows[0]
}

export { 
  createUserService 
}
