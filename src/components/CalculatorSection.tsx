import React from 'react';

import Button from './Button';
import Radios from './Radios';
import NumberFieldAffix from './NumberFieldAffix';

import type { Inputs } from '../types';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';

function CalculatorSection({
  onCalculate,
  onClearAll,
  register,
  errors,
}: {
  onCalculate: (e?: React.BaseSyntheticEvent) => void;
  onClearAll: () => void;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}) {
  return (
    <div className="flex flex-col gap-300 px-300 py-400 sm:gap-500 md:p-500">
      <form onSubmit={onCalculate} className="flex flex-col gap-300 sm:gap-500">
        <div className="flex flex-col items-start gap-100 sm:flex-row sm:justify-between">
          <h1 className="text-600 text-slate-900">Mortgage Calculator</h1>
          <Button category="link" onClick={onClearAll}>
            Clear All
          </Button>
        </div>

        <div className="flex flex-col gap-300">
          <NumberFieldAffix
            type="prefix"
            label="Mortgage Amount"
            symbol="£"
            name="amount"
            register={register}
            error={errors.amount}
          />
          <div className="flex flex-col gap-300 sm:flex-row">
            <NumberFieldAffix
              type="suffix"
              label="Mortgage Term"
              symbol="years"
              name="term"
              register={register}
              error={errors.term}
            />
            <NumberFieldAffix
              type="suffix"
              label="Interest Rate"
              symbol="%"
              name="rate"
              register={register}
              error={errors.rate}
            />
          </div>
          <Radios
            label="Mortgage Type"
            name="type"
            register={register}
            error={errors.type}
          />
        </div>
        <div className="sm:self-start">
          <Button category="primary">Calculate Repayments</Button>
        </div>
      </form>
    </div>
  );
}

export default CalculatorSection;
