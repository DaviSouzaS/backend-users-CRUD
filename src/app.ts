import express, { Application } from "express"
import { userRouter } from "./routes/user.router"
import { loginRouter } from "./routes/login.router"
import { errorHandler } from "./error"
import "express-async-errors"

const app: Application = express()
app.use(express.json())

app.use('/users', userRouter)
app.use('/login', loginRouter)

app.use(errorHandler)

export { 
    app
} 