import { z } from 'zod';

export const mortgageSchema = z.object({
  amount: z
    .string()
    .trim()
    .min(1, { message: 'Amount is required' })
    .refine((value) => Number(value) > 0, {
      message: 'Amount must be greater than 0',
    }),
  term: z
    .string()
    .trim()
    .min(1, { message: 'Term is required' })
    .refine((value) => Number(value) > 0, {
      message: 'Term must be greater than 0',
    }),
  rate: z
    .string()
    .trim()
    .min(1, { message: 'Rate is required' })
    .refine((value) => Number(value) > 0, {
      message: 'Rate must be greater than 0',
    }),
  type: z.enum(['repayment', 'interest'], {
    required_error: 'Type is required',
    invalid_type_error: 'Type is required',
  }),
});
