export function calculateMortgage(
  mortgageAmount: number,
  annualRate: number,
  termYears: number,
  mortgageType: "repayment" | "interest"
) {
  const r = annualRate / 12 / 100; // Monthly interest rate
  const n = termYears * 12; // Total number of payments

  if (mortgageType === 'repayment') {
    const monthlyPayment = Number((
      mortgageAmount *
      ((r * (1 + r) ** n) / ((1 + r) ** n - 1))
    ).toFixed(2));
    const totalRepayment = Number((monthlyPayment * n).toFixed(2));
    return { monthlyPayment, totalRepayment };
    // -------------------------------------------------------------------------
  } else if (mortgageType === 'interest') {
    const monthlyPayment = Number(((mortgageAmount * (annualRate / 100)) / 12).toFixed(
      2
    ));
    const totalRepayment = Number((monthlyPayment * n + mortgageAmount).toFixed(2));
    return { monthlyPayment, totalRepayment };
  } else {
    throw new Error("Invalid mortgage type");
  }
}

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(
    value
  );
