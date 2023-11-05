import * as z from 'zod';

export const CreateAccountFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' }),
  username: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    })
    .regex(/^[a-z0-9]+$/, {
      message: 'Username must only contain lowercase alphanumeric characters.',
    }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
  role: z.enum(['student', 'recruiter']),
});

export type CreateAccountFormValues = z.infer<typeof CreateAccountFormSchema>;
