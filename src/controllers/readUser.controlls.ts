import { readUserService } from "../services/readUser.service"
import { Request, Response } from "express"

const readUserController = async (request: Request, response: Response): Promise<Response> => {

  const userID = request.user.id

  const user = await readUserService(userID)

  return response.status(201).json(user)
};

export { 
  readUserController
}