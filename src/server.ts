import { startDataBase } from "./database"
import app from "./app"

app.listen(3000, async () => {
    await startDataBase()
    console.log("Server is running!")
})