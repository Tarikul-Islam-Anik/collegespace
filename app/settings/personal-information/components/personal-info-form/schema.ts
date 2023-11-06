import * as z from 'zod';

export const personalInfoFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
  email: z.string().optional(),
  phone: z.string().optional(),
  dob: z.date().or(z.string()).or(z.undefined()).optional(),
  gender: z.string().optional(),
});

export type PersonalInfoFormValues = z.infer<typeof personalInfoFormSchema>;
