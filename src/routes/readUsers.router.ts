import { validateToken } from "../middlewares/validateToken.middleware"
import { checkIfUserIsAdmin } from "../middlewares/validateIfUserIsAdmin.middleware"
import { readUsersController } from "../controllers/readUsers.controlls"
import { readUserController } from "../controllers/readUser.controlls"
import { Router } from "express"

const readUsersRouter: Router = Router()

readUsersRouter.get('', validateToken, checkIfUserIsAdmin, readUsersController)

readUsersRouter.get('/profile', validateToken, readUserController)

export {
    readUsersRouter
}