import * as z from 'zod';

export const profileFormSchema = z.object({
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
    })
    .optional(),

  bio: z
    .string()
    .trim()
    .min(1, {
      message: 'Bio must be at least 1 characters long',
    })
    .max(101, {
      message: 'Bio must not be longer than 101 characters.',
    })
    .optional(),
  image: z.string().or(z.any()).optional(),
  coverImage: z.string().or(z.any()).optional(),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;
