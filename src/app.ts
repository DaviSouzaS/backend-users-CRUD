import "express-async-errors"
import { loginRouter } from "./routes/login.router"
import { userRouter } from "./routes/user.router"
import express, { Application } from "express"
import { handleErrors } from "./error"

const app: Application = express()
app.use(express.json())

app.use('/users', userRouter)

app.use('/login', loginRouter)

app.use(handleErrors)

export { 
    app
} 