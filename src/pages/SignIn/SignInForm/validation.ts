import { z } from 'zod';

export const signInSchema = z
  .object({
    username: z.string().trim().min(1, 'Username must be at least 1 character'),
    email: z.string().trim().email('Provided email is not valid').min(1, 'Email must not be empty'),
    password: z.string().trim().min(4, 'Password must be at least 4 character'),
    confirmPassword: z.string().trim().min(4, 'Password must be at least 4 character'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and Confirm password don't match",
    path: ['confirmPassword'],
  });

export type SignInFormValues = z.infer<typeof signInSchema>;
