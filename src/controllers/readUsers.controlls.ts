import { readUsersService } from "../services/readUsers.service"
import { Request, Response } from "express"

const readUsersController = async (request: Request, response: Response): Promise<Response> => {

  const users = await readUsersService()

  return response.status(201).json(users)
};

export { 
    readUsersController
}