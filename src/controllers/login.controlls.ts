import { Request, Response } from "express"
import { createLogin } from "../services/login.service"
import { iLoginRequest } from "../interfaces/login.interface"

const createLoginController = async (request: Request, response: Response): Promise<Response> => {
  const userData: iLoginRequest = request.body
  
  const token = await createLogin(userData)

  return response.status(201).json(token)
};

export { 
  createLoginController
}