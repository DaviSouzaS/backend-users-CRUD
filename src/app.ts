import "express-async-errors"
import express, { Application } from "express"
import { userRouter } from "./routes/user.router"
import { loginRouter } from "./routes/login.router"
import { readUsersRouter } from "./routes/readUsers.router"
import { updateUserRouters } from "./routes/updateUser.router"
import { deleteUserRouter } from "./routes/deleteUser.router"
import { activeUserRouter } from "./routes/activeUser.router"
import { handleErrors } from "./error"

const app: Application = express()
app.use(express.json())

app.use('/users', userRouter)

app.use('/login', loginRouter)

app.use('/users', readUsersRouter)

app.use('/users', updateUserRouters)

app.use('/users', deleteUserRouter)

app.use('/users', activeUserRouter)

app.use(handleErrors)

export { 
    app
} 