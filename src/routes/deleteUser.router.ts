import { userRestrictions } from "../middlewares/userRestrictions.middleware"
import { checkIfUserExist } from "../middlewares/checkIfUserExist.middlewere"
import { deleteUserController } from "../controllers/deleteUser.controlls"
import { validateToken } from "../middlewares/validateToken.middleware"
import { Router } from "express"

const deleteUserRouter: Router = Router()

deleteUserRouter.delete('/:id', validateToken, checkIfUserExist, userRestrictions, deleteUserController)

export {
    deleteUserRouter
}