import {
  NumberField,
  Label,
  Input,
  Group,
  FieldError,
} from 'react-aria-components';

import type {
  UseFormRegister,
  FieldError as HookFormFieldError,
} from 'react-hook-form';

import type { FormData } from '../types';

type NumberFieldAffixProps = {
  type: 'amount' | 'term' | 'rate';
  label: string;
  symbol: string;
  name: string;
  register: UseFormRegister<FormData>;
  error?: HookFormFieldError;
};

function NumberFieldAffix({
  type,
  label,
  symbol,
  name,
  register,
  error,
}: NumberFieldAffixProps) {
  const isPrefix = type === 'amount';
  const isSuffix = type === 'term' || type === 'rate';

  return (
    <NumberField
      className="flex flex-col gap-150"
      name={name}
      minValue={0}
      isRequired={true}
    >
      <Label>
        {label} <span className="sr-only">{`in ${symbol}`}</span>
      </Label>
      <Group
        className={`data-focus-within:border-lime group data-invalid:border-red grid ${
          isPrefix ? 'grid-cols-[auto_1fr]' : 'grid-cols-[1fr_auto]'
        } rounded-sm border border-slate-500 transition-all duration-300 ease-in-out has-hover:border-slate-900 data-focus-visible:outline-2 data-focus-visible:outline-offset-2 data-focus-visible:outline-slate-900 data-focus-visible:outline-dotted`}
      >
        {isPrefix && (
          <p className="text-500 group-data-focus-within:bg-lime group-data-invalid:bg-red w-fit rounded-l-sm bg-slate-100 px-200 py-150 transition-colors duration-300 ease-in-out group-data-focus-within:text-slate-900 group-data-invalid:text-white">
            {symbol}
          </p>
        )}
        <Input
          className="text-500 w-full cursor-pointer px-200 text-slate-900 outline-0 transition-all duration-300 ease-in-out"
          {...register(name as keyof FormData, {
            valueAsNumber: true,
            required: 'This field is required',
            min: {
              value: 0,
              message: 'Value must be greater than or equal to 0',
            },
          })}
        />
        {isSuffix && (
          <p className="text-500 group-data-focus-within:bg-lime group-data-invalid:bg-red w-fit rounded-r-sm bg-slate-100 px-200 py-150 transition-colors duration-300 ease-in-out group-data-focus-within:text-slate-900 group-data-invalid:text-white">
            {symbol}
          </p>
        )}
      </Group>
      {error && (
        <FieldError className="text-300 text-red">{error.message}</FieldError>
      )}
    </NumberField>
  );
}

export default NumberFieldAffix;
