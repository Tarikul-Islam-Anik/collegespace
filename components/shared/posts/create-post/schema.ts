import z from 'zod';

export const postFormSchema = z.object({
  content: z.string().trim().min(1).max(256),
  type: z.enum(['thought', 'question']),
});

export type PostFormValues = z.infer<typeof postFormSchema>;
