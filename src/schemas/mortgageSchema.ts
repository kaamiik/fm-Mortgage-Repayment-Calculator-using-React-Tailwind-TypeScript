import { z } from 'zod';

export const mortgageSchema = z.object({
  amount: z.preprocess(
    (val) =>
      val === '' || val === null || Number.isNaN(val) ? undefined : val,
    z
      .number({ required_error: 'Amount is required' })
      .gt(0, 'Amount must be greater than 0')
  ),
  term: z.preprocess(
    (val) =>
      val === '' || val === null || Number.isNaN(val) ? undefined : val,
    z
      .number({ required_error: 'Term is required' })
      .gt(0, 'Term must be greater than 0')
  ),
  rate: z.preprocess(
    (val) =>
      val === '' || val === null || Number.isNaN(val) ? undefined : val,
    z
      .number({ required_error: 'Rate is required' })
      .gt(0, 'Rate must be greater than 0')
  ),
  type: z.preprocess(
    (val) => (val === '' || val === null ? undefined : val),
    z.enum(['repayment', 'interest'], { required_error: 'Type is required' })
  ),
});
