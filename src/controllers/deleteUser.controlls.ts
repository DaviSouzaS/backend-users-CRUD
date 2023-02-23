import { Request, Response } from "express"
import { deleteUser } from "../services/deleteUser.service"

const deleteUserController = async (request: Request, response: Response): Promise<Response> => {

    const idParams: string = request.params.id

    await deleteUser(idParams) 

    return response.status(204).send()
}

export {
    deleteUserController
}