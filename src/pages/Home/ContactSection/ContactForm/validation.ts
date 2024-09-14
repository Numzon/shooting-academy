import { z } from 'zod';

export const contactValidationSchema = z.object({
  fullname: z.string().trim().min(1, 'Full name must be at least 1 character'),
  email: z.string().trim().email('Provided email is not valid').min(1, 'Email must not be empty'),
  isRadioTrue: z.string().min(1, 'Please select one of given option'),
});

export type ContactFormValues = z.infer<typeof contactValidationSchema>;
