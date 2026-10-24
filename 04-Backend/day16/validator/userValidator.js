import {z} from ZodAny;

export const signUpSchema = z.object({
    name :
        z.string
        .min(3,"enter valid name")
        .max(25,"enter valid name")
        .trim(),
    age :
        z.number
        .trim()
        .min(10," age should be greter than 9")
        .max(100," age should be less than 101")
        .optional(),
    email: z.preprocess(
        (value)=> typeof value == "string" ? value.trim().toLowerCase():"",
        z.email("Email must be valid")
    ),
    password:
        z.min(8,"password should contain atleast 8 characters")
        .max(30,"password should contain less tham 30 characters")
        .string()
        .regex(/[A-Z]/,"Password should contain atleast 1 capital letter ")
        .regex(/[a-z]/,"Passwrod should contain atleast 1 small leter")
        .regex(/[0-9]/,"password should contain atleast 1 number")
        .regex(/[!@#$%^&*()_+-=]/,"password should contain atleast 1 special character")

})

export const loginSchema = z.object({
    email: z.preprocess(
        (value)=> typeof value == "string" ? value.trim().toLowerCase():"",
        z.email("Email must be valid")
    ),
    password:
        z.min(8,"password should contain atleast 8 characters")
        .max(30,"password should contain less tham 30 characters")
        .string()
        .regex(/[A-Z]/,"Password should contain atleast 1 capital letter ")
        .regex(/[a-z]/,"Passwrod should contain atleast 1 small leter")
        .regex(/[0-9]/,"password should contain atleast 1 number")
        .regex(/[!@#$%^&*()_+-=]/,"password should contain atleast 1 special character")

})
