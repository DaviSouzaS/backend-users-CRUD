import { Request, Response } from "express"
import { readUsersService } from "../services/readUsers.service"

const readUsersController = async (request: Request, response: Response): Promise<Response> => {

  const users = await readUsersService()

  return response.status(201).json(users)
};

export { 
    readUsersController
}