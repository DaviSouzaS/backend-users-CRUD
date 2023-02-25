import { createLoginService } from "../services/login.service"
import { iLoginRequest } from "../interfaces/login.interface"
import { Request, Response } from "express"

const createLoginController = async (request: Request, response: Response): Promise<Response> => {
  
  const userData: iLoginRequest = request.body

  const token = await createLoginService(userData)

  return response.status(201).json(token)
};

export { 
  createLoginController
}