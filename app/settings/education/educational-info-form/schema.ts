import z from 'zod';

export const educationalInfoFormSchema = z.object({
  school: z
    .string()
    .trim()
    .min(1, {
      message: 'School name is required',
    })
    .max(101, {
      message: 'School name must be less than 101 characters',
    }),
  degree: z.string().trim().min(3).max(51),
  field: z.string().trim().min(3).max(51),
  startDate: z.date(),
  endDate: z.date(),
  grade: z.coerce.number().min(0).max(5.0),
});

export type EducationalInfoFormValues = z.infer<
  typeof educationalInfoFormSchema
>;
