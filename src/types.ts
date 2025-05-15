export interface FormData {
  amount: number;
  term: number;
  rate: number;
  type: 'repayment' | 'interest';
  repayment?: string;
  interest?: string;
}
