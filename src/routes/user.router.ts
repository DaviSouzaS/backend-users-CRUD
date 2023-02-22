import { createUserController } from "../controllers/user.controlls"
import { checkIfEmailIsUnique } from "../middlewares/user.middleware"
import { createUserSchema } from "../schemas/user.schemas"
import { validateData } from "../middlewares/user.middleware"
import { Router } from "express"

const userRouter: Router = Router()

userRouter.post('', checkIfEmailIsUnique, validateData(createUserSchema) ,createUserController)

export {
    userRouter
}