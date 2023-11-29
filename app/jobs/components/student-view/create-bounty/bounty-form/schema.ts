import { z } from 'zod';

export const bountyFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  reward: z.string().or(z.number().int().positive()),
  deadline: z.string().or(z.date()),
});

export type BountyFormValues = z.infer<typeof bountyFormSchema>;