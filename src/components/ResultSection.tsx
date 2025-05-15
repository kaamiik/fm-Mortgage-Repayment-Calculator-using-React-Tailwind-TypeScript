import { formatCurrency } from '../utils';

interface ResultsSectionProps {
  results: {
    monthlyPayment: number;
    totalRepayment: number;
  } | null;
}

function ResultsSection({ results }: ResultsSectionProps) {
  return (
    <div
      aria-live="polite"
      className="bg-slate-900 px-300 py-400 md:p-500 lg:rounded-es-[80px]"
    >
      {results ? (
        <div className="flex flex-col gap-300 md:gap-400">
          <div className="flex flex-col gap-200">
            <h2 className="text-600 text-white">Your Results</h2>
            <p className="text-slate-300">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </p>
          </div>
          <div
            aria-atomic="true"
            className="border-lime flex flex-col gap-200 rounded-lg border-t-4 bg-black/25 px-300 py-400 md:p-500"
          >
            <div className="flex flex-col gap-100">
              <p className="text-slate-300">Your monthly repayments</p>
              <output className="text-lime sm:text-900 text-4xl font-bold">
                {formatCurrency(results.monthlyPayment)}
              </output>
            </div>
            <hr className="border-t-slate-300/25" />
            <div className="flex flex-col gap-100">
              <p className="text-slate-300">Total you'll repay over the term</p>
              <output className="text-600 text-white">
                {formatCurrency(results.totalRepayment)}
              </output>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col gap-200 text-center lg:justify-center">
          <img
            className="mx-auto"
            src="/assets/images/illustration-empty.svg"
            alt=""
          />
          <h2 className="text-600 text-white">Results shown here</h2>
          <p className="text-balance text-slate-300">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
      )}
    </div>
  );
}

export default ResultsSection;
