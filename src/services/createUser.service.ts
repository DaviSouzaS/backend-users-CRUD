import {iUserRequest, UserResult, iUserWithoutPassword} from "../interfaces/user.interface";
import { client } from "../database/config";
import { hash } from "bcryptjs"
import format from "pg-format";

const createUserService = async (userData: iUserRequest): Promise<iUserWithoutPassword> => {

  const encryptedKey = await hash(userData.password, 10)

  userData.password = encryptedKey

  const queryString: string = format(
    `
    INSERT INTO
      users(%I)
    VALUES(%L)
      RETURNING id, name, email, admin, active
    `,
    Object.keys(userData),
    Object.values(userData)
  )

  const queryResult: UserResult = await client.query(queryString)

  return queryResult.rows[0]
}

export { 
  createUserService 
}
