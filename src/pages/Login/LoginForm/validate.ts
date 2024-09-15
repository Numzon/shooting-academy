import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().trim().email('Provided email is not valid').min(1, 'Email must not be empty'),
  password: z.string().trim().min(1, 'Password must not be empty'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
