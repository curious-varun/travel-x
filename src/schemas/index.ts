import { z } from "zod";

export const LoginScheema = z.object({
  username: z.string()
    .min(4, { message: "Name must be at least 4 characters long" })
    .max(16, { message: "Name must be no more than 16 characters long" }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(16, { message: "Password must be no more than 16 characters long" }),
});

const userSignupSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

export default userSignupSchema;
