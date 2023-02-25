import { activeUserService } from "../services/activeUser.service"
import { Request, Response } from "express"

const activeUserController = async (request: Request, response: Response): Promise<Response> => {

    const idParams: string = request.params.id

    const activatedUser = await activeUserService(idParams) 

    return response.status(200).json(activatedUser)
}

export {
    activeUserController
}