import { Request, Response } from "express"
import { updateUserService } from "../services/updateUser.service"
import { iUserUpdateRequest } from "../interfaces/updateUser.interface"

const updateUserController = async (request: Request, response: Response): Promise<Response> => {
    
    const updateUserData: iUserUpdateRequest = request.body

    const userID: string = request.params.id

    const updateUser = await updateUserService(updateUserData, userID)

    return response.status(200).json(updateUser)
}

export {
    updateUserController
}

