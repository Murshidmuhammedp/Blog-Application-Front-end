import { z } from "zod";

export const signUpSchema = z.object({
    FullName: z.string().min(2, "Full name must be at least 2 characters long")
        .max(50, "Full name must be less than 50 characters long"),
    email: z.string().email("Invalid email address"),
    Designation: z.string().min(2, "Designation must be at least 2 characters long")
        .max(30, "Designation must be less than 30 characters long"),
    Password: z.string().min(6, "Password must be at least 6 characters"),
    termsAccepted: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions",
    }),
});

export const signInSchema = z.object({
    email: z.string().email(),
    Password: z.string().min(6, "Password must be at least 6 characters"),
    termsAccepted: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions",
    }),
});