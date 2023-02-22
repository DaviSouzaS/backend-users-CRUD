import { Router } from "express"
import { createLoginController } from "../controllers/login.controlls"

const loginRouter: Router = Router()

loginRouter.post('', createLoginController)

export {
    loginRouter
}