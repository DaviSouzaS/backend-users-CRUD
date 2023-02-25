import { checkIfUserIsAdmin } from "../middlewares/validateIfUserIsAdmin.middleware"
import { checkIfUserIsActive } from "../middlewares/checkIfUserIsActive.middleware"
import { userRestrictions } from "../middlewares/userRestrictions.middleware"
import { checkIfUserExist } from "../middlewares/checkIfUserExist.middlewere"
import { updateUserController } from "../controllers/updateUser.controlls"
import { deleteUserController } from "../controllers/deleteUser.controlls"
import { activeUserController } from "../controllers/activeUser.controlls"
import { readUsersController } from "../controllers/readUsers.controlls"
import { validateToken } from "../middlewares/validateToken.middleware"
import { readUserController } from "../controllers/readUser.controlls"
import { checkIfEmailIsUnique } from "../middlewares/user.middleware"
import { createUserController } from "../controllers/user.controlls"
import { updateUserSchema } from "../schemas/updateUser.schema"
import { validateData } from "../middlewares/user.middleware"
import { createUserSchema } from "../schemas/user.schemas"
import { Router } from "express"

const userRouter: Router = Router()

userRouter.post('', checkIfEmailIsUnique, validateData(createUserSchema) ,createUserController)

userRouter.get('', validateToken, checkIfUserIsAdmin, readUsersController)

userRouter.get('/profile', validateToken, readUserController)

userRouter.patch('/:id', validateToken, checkIfUserExist, validateData(updateUserSchema), checkIfEmailIsUnique, userRestrictions, updateUserController)

userRouter.put('/:id/recover', validateToken, checkIfUserExist, userRestrictions, checkIfUserIsActive, activeUserController)

userRouter.delete('/:id', validateToken, checkIfUserExist, userRestrictions, deleteUserController)

export {
    userRouter
}