import { userRestrictions } from "../middlewares/userRestrictions.middleware"
import { checkIfUserExist } from "../middlewares/checkIfUserExist.middlewere"
import { activeUserController } from "../controllers/activeUser.controlls"
import { validateToken } from "../middlewares/validateToken.middleware"
import { checkIfUserIsActive } from "../middlewares/checkIfUserIsActive.middleware"
import { Router } from "express"

const activeUserRouter: Router = Router()

activeUserRouter.put('/:id/recover', validateToken, checkIfUserExist, userRestrictions, checkIfUserIsActive, activeUserController)

export {
    activeUserRouter
}