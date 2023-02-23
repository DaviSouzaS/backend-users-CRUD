import { createLoginController } from "../controllers/login.controlls"
import { validateData } from "../middlewares/user.middleware"
import { loginSchema } from "../schemas/login.schema"
import { Router } from "express"

const loginRouter: Router = Router()

loginRouter.post('', validateData(loginSchema), createLoginController)

export {
    loginRouter
}