import z from 'zod';

export const projectFormSchema = z.object({
  title: z.string().max(101),
  description: z.string().max(500),
  website: z.string().max(100),
  startDate: z.date(),
  endDate: z.date(),
});

export type ProjectFormValues = z.infer<typeof projectFormSchema>;
