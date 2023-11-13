import z from 'zod';

export const companyFormSchema = z.object({
  name: z.string().min(3).max(51),
  about: z.string().max(500),
  email: z.string().email(),
  phone: z.string().max(15),
  website: z.string().max(100).optional(),
  logo: z.string().or(z.instanceof(File)),
  address: z.string().max(101).optional(),
});

export type CompanyFormValues = z.infer<typeof companyFormSchema>;
