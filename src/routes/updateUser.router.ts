import { validateData, checkIfEmailIsUnique } from "../middlewares/user.middleware"
import { userRestrictions } from "../middlewares/userRestrictions.middleware"
import { updateUserController } from "../controllers/updateUser.controlls"
import { validateToken } from "../middlewares/validateToken.middleware"
import { checkIfUserExist } from "../middlewares/checkIfUserExist.middlewere"
import { updateUserSchema } from "../schemas/updateUser.schema"
import { Router } from "express"

const updateUserRouters: Router = Router()

updateUserRouters.patch('/:id', validateToken, checkIfUserExist, validateData(updateUserSchema), checkIfEmailIsUnique, userRestrictions, updateUserController)

export {
    updateUserRouters
}