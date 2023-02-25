import { z } from "zod"

const updateUserSchema = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    admin: z.boolean().optional()
})

export {
    updateUserSchema
}