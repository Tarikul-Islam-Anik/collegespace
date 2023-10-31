import z from 'zod';

export const CreateAccountFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
  role: z.enum(['student', 'recruiter']),
  dob: z.date(),
  gender: z.enum(['male', 'female']),
});

const UserSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  email: z.string().optional(),
  emailVerified: z.string().optional(),
  phone: z.string().optional(),
  password: z.string().optional(),
  role: z.enum(['student', 'recruiter']),
  dob: z.date().optional(),
  gender: z.enum(['male', 'female']),
  image: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const JobSchema = z.object({
  id: z.string(),
  userID: z.string(),
  title: z.string(),
  description: z.string(),
  company: z.string(),
  salary: z.number().optional(),
  type: z.enum([
    'full-time',
    'part-time',
    'contract',
    'internship',
    'temporary',
    'freelance',
    'volunteer',
  ]),
  locationType: z.enum(['remote', 'onsite', 'hybrid']),
  location: z.string(),
  applyDate: z.string(),
  applicants: z.array(z.string()).optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type CreateAccountFormValues = z.infer<typeof CreateAccountFormSchema>;
export type User = z.infer<typeof UserSchema>;
export type Job = z.infer<typeof JobSchema>;
