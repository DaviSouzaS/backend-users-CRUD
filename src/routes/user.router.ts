import { createUserController } from "../controllers/user.controlls"
import { checkIfEmailIsUnique } from "../middlewares/user.middleware"
import { Router } from "express"

const userRouter: Router = Router()

userRouter.post('', checkIfEmailIsUnique, createUserController)

export {
    userRouter
}