export type Inputs = {
  amount: number;
  term: number;
  rate: number;
  type: 'repayment' | 'interest';
};

export type MortgageResults = {
  monthlyPayment: number;
  totalRepayment: number;
} | null;
