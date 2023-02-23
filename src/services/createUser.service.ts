import {iUserRequest, UserResult, iUserWithoutPassword} from "../interfaces/user.interface";
import { client } from "../database/config";
import { hash } from "bcryptjs"
import format from "pg-format";

const createUserService = async (userData: iUserRequest): Promise<iUserWithoutPassword> => {

  const encryptedKey = await hash(userData.password, 10)

  userData.password = encryptedKey

  const userDataValid = {
    name: userData.name,
	  email: userData.email ,
	  password: userData.password,
	  admin: userData.admin
  }

  const queryString: string = format(
    `
    INSERT INTO
      users(%I)
    VALUES(%L)
      RETURNING id, name, email, admin, active
    `,
    Object.keys(userDataValid),
    Object.values(userDataValid)
  )

  const queryResult: UserResult = await client.query(queryString)

  return queryResult.rows[0]
}

export { 
  createUserService 
}
