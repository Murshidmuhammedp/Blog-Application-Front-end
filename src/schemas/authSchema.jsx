import { z } from "zod";

export const signUpSchema = z.object({
    FullName: z.string(),
    email: z.string().email(),
    Designation: z.string(),
    Password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signInSchema = z.object({
    email: z.string().email(),
    Password: z.string(),
});