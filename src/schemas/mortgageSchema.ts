import { z } from 'zod';

export const mortgageSchema = z.object({
  amount: z.number().min(1, 'This field is required'),
  rate: z.number().min(0, 'This field is required'),
  term: z.number().min(1, 'This field is required'),
  type: z.enum(['repayment', 'interest'], {
    required_error: 'This field is required',
  }),
});
