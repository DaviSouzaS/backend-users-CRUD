import { z } from "zod"

const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    admin: z.boolean().default(false)
})

export {
    createUserSchema
}