import z from 'zod';

export const UserAuthFormSchema = z.object({
  email: z.string({ required_error: 'Please enter your email address' }).email({
    message: 'Please enter a valid email address',
  }),
  password: z.string({ required_error: 'Please enter your password' }).min(8, {
    message: 'Please enter a valid password',
  }),
});

export type UserAuthFormValues = z.infer<typeof UserAuthFormSchema>;
