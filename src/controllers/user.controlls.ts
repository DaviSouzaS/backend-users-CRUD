import { createUserService } from "../services/createUser.service"
import { iUserRequest } from "../interfaces/user.interface"
import { Request, Response } from "express"

const createUserController = async (request: Request, response: Response): Promise<Response> => {
  const userData: iUserRequest = request.body

  const createUser = await createUserService(userData)

  return response.status(201).json(createUser)
};

export { 
  createUserController
}
