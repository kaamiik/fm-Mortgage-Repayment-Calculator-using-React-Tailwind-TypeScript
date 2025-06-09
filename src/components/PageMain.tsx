import React from 'react';
import { useForm } from 'react-hook-form';

import { calculateMortgage } from '../utils';

import CalculatorSection from './CalculatorSection';
import ResultsSection from './ResultSection';

import type { Inputs, MortgageResults } from '../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { mortgageSchema } from '../schemas/mortgageSchema';

function PageMain() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(mortgageSchema),
  });

  const [results, setResults] = React.useState<MortgageResults>(null);

  function onSubmit(data: Inputs) {
    const results = calculateMortgage(
      Number(data.amount),
      Number(data.rate),
      Number(data.term),
      data.type
    );
    setResults(results);
  }

  function handleClearAll() {
    reset();
    setResults(null);
  }

  return (
    <main className="flex-1 md:flex md:items-center">
      <div className="mx-auto grid max-w-[43rem] bg-white drop-shadow-[0_32px_64px_hsla(202,55,16,10)] md:my-500 md:overflow-hidden md:rounded-3xl lg:max-w-[63em] lg:grid-cols-2">
        <CalculatorSection
          onCalculate={handleSubmit(onSubmit)}
          onClearAll={handleClearAll}
          register={register}
          errors={errors}
        />
        <ResultsSection results={results} />
      </div>
    </main>
  );
}

export default PageMain;
