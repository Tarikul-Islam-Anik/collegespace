import * as z from 'zod';

export const personalInfoFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  dob: z
    .date({ required_error: 'Date of birth is required.' })
    .or(z.string())
    .or(z.undefined()),
  gender: z.string({
    required_error: 'Please select a gender.',
  }),
  country: z.string({
    required_error: 'Please select a country.',
  }),
  about: z
    .string({ required_error: 'About is required.' })
    .max(999, { message: 'About must not be longer than 1000 characters.' }),
  experience: z.string().or(z.number()),
});

export type PersonalInfoFormValues = z.infer<typeof personalInfoFormSchema>;
