import z from 'zod';

export const experienceFormSchema = z.object({
  title: z.string().max(101),
  description: z.string(),
  position: z.string().max(51),
  type: z.string().max(51),
  startDate: z.date(),
  endDate: z.date(),
});

export type ExperienceFormValue = z.infer<typeof experienceFormSchema>;
