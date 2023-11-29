import z from 'zod';

export const jobFormSchema = z.object({
  title: z.string().min(1).max(51),
  description: z.string().min(1).max(999),
  type: z.enum([
    'fulltime',
    'parttime',
    'contract',
    'internship',
    'temporary',
    'remote',
    'other',
  ]),
  salary: z.string(),
  location: z.string().min(1).max(51).optional(),
  deadline: z.date().min(new Date()),
});

export type JobFormValue = z.infer<typeof jobFormSchema>;
