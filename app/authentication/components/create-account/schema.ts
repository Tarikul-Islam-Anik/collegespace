import * as z from 'zod';

export const CreateAccountFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
  role: z.enum(['student', 'recruiter']),
});

export type CreateAccountFormValues = z.infer<typeof CreateAccountFormSchema>;
