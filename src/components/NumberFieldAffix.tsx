import type { FieldError, UseFormRegister } from 'react-hook-form';

import type { Inputs } from '../types';

type NumberFieldProps = {
  type: 'prefix' | 'suffix';
  label: string;
  symbol: string;
  name: keyof Inputs;
  register: UseFormRegister<Inputs>;
  error?: FieldError;
};

function NumberFieldAffix({
  type,
  label,
  symbol,
  name,
  register,
  error,
}: NumberFieldProps) {
  if (type === 'prefix')
    return (
      <div className="flex flex-col gap-150">
        <label htmlFor={name}>
          {label} <span className="sr-only">{`in ${symbol}`}</span>
        </label>
        <div
          className={`group grid grid-cols-[auto_1fr] rounded-sm border transition-colors duration-300 ease-in-out ${
            error
              ? 'border-red'
              : 'focus-within:border-lime border-slate-500 hover:border-slate-900'
          }focus-within:outline-1 focus-within:outline-offset-2 focus-within:outline-slate-900 focus-within:outline-dotted`}
        >
          <p
            className={`text-500 w-fit rounded-l-sm px-200 py-150 transition-colors duration-300 ease-in-out ${
              error
                ? 'bg-red text-white'
                : 'group-focus-within:bg-lime bg-slate-100 group-focus-within:text-slate-900'
            }`}
          >
            {symbol}
          </p>
          <input
            id={name}
            type="number"
            step="any"
            {...register(name)}
            className="text-500 w-full cursor-pointer px-200 py-150 text-slate-900 outline-0 transition-all duration-300 ease-in-out"
          />
        </div>
        {error && <p className="text-300 text-red">{error.message}</p>}
      </div>
    );

  if (type === 'suffix')
    return (
      <div className="flex flex-col gap-150">
        <label htmlFor={name}>
          {label} <span className="sr-only">{`in ${symbol}`}</span>
        </label>
        <div
          className={`group grid grid-cols-[1fr_auto] rounded-sm border transition-all duration-300 ease-in-out ${
            error
              ? 'border-red'
              : 'focus-within:border-lime border-slate-500 hover:border-slate-900'
          }focus-within:outline-1 focus-within:outline-offset-2 focus-within:outline-slate-900 focus-within:outline-dotted`}
        >
          <input
            id={name}
            type="number"
            step="any"
            {...register(name)}
            className="text-500 w-full cursor-pointer px-200 py-150 text-slate-900 outline-0 transition-all duration-300 ease-in-out"
          />
          <p
            className={`text-500 w-fit rounded-r-sm px-200 py-150 transition-colors duration-300 ease-in-out ${
              error
                ? 'bg-red text-white'
                : 'group-focus-within:bg-lime bg-slate-100 group-focus-within:text-slate-900'
            }`}
          >
            {symbol}
          </p>
        </div>
        {error && <p className="text-300 text-red">{error.message}</p>}
      </div>
    );
}

export default NumberFieldAffix;
