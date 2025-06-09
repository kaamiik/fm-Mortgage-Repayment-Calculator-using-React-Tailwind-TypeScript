import { z } from 'zod';
import { mortgageSchema } from './schemas/mortgageSchema';

export type Inputs = z.infer<typeof mortgageSchema>;

export type MortgageResults = {
  monthlyPayment: number;
  totalRepayment: number;
} | null;
