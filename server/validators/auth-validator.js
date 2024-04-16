const { z } = require("zod");

// creating object schema
const signupSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(255, { message: "Username cannot exceed 255 characters" }),
  email: z
    .string()
    .min(3, { message: "Email must be at least 3 characters long" })
    .max(255, { message: "Email cannot exceed 255 characters" })
    .email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters long" })
    .max(20, { message: "Phone number cannot exceed 20 characters" }),
  password: z
    .string()
    .min(7, { message: "Password must be at least 7 characters long" })
    .max(1024, { message: "Password cannot exceed 1024 characters" }),
});

// const loginSchema = z.object({
//   email: z
//     .string()
//     .min(3, { message: "Email must be at least 3 characters long" })
//     .max(255, { message: "Email cannot exceed 255 characters" })
//     .email({ message: "Invalid email address" }),
//   password: z
//     .string()
//     .min(7, { message: "Password must be at least 7 characters long" })
//     .max(1024, { message: "Password cannot exceed 1024 characters" }),
// });

module.exports = { signupSchema };
