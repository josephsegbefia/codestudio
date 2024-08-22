import { z } from 'zod';

export const RegisterSchema = z.object({
  firstName: z.string().min(6).max(15),
  lastName: z.string().min(10).max(20),
  email: z.string().min(10).max(50),
  phoneNumber: z.string().min(10).max(15),
  linkedin: z
    .string()
    .url()
    .startsWith('https://www.linkedin.com/in/', 'Invalid LinkedIn URL'),
  github: z
    .string()
    .url()
    .startsWith('https://github.com/', 'Invalid GitHub URL'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/\d/, 'Password must contain at least one number')
    .regex(
      /[@$!%*?&#]/,
      'Password must contain at least one special character'
    ),
});
