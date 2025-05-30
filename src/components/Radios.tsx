import { RadioGroup, Radio, FieldError, Label } from 'react-aria-components';
import type {
  FieldError as RhfFieldError,
  UseFormRegister,
} from 'react-hook-form';

import type { Inputs } from '../types';

type RadiosProps = {
  label: string;
  name: keyof Inputs;
  register: UseFormRegister<Inputs>;
  error?: RhfFieldError;
};

function Radios({ label, name, register, error }: RadiosProps) {
  return (
    <RadioGroup className="flex flex-col gap-150" name={name} isRequired>
      <Label>{label}</Label>
      <Radio
        className="text-500 data-selected:bg-lime/15 data-selected:border-lime hover:border-lime data-selected:after:inset-shadow-input relative flex cursor-pointer items-center gap-100 rounded-sm border border-slate-500 px-200 py-150 text-slate-900 transition-colors duration-200 before:m-[2.25px] before:h-[20px] before:w-[20px] before:rounded-full before:border-2 before:border-slate-700 before:content-[''] after:absolute after:m-[7.25px] after:ml-[7px] after:h-[11px] after:w-[11px] after:scale-0 after:rounded-full after:transition-colors after:duration-200 after:ease-in-out after:content-[''] data-focus-visible:outline-2 data-focus-visible:outline-offset-2 data-focus-visible:outline-slate-900 data-focus-visible:outline-dotted data-selected:after:scale-100"
        value="repayment"
        {...register(name, { required: 'This field is required' })}
      >
        Repayment
      </Radio>
      <Radio
        className="text-500 data-selected:bg-lime/15 data-selected:border-lime hover:border-lime data-selected:after:inset-shadow-input relative flex cursor-pointer items-center gap-100 rounded-sm border border-slate-500 px-200 py-150 text-slate-900 transition-colors duration-200 before:m-[2.25px] before:h-[20px] before:w-[20px] before:rounded-full before:border-2 before:border-slate-700 before:content-[''] after:absolute after:m-[7.25px] after:ml-[7px] after:h-[11px] after:w-[11px] after:scale-0 after:rounded-full after:transition-colors after:duration-200 after:ease-in-out after:content-[''] data-focus-visible:outline-2 data-focus-visible:outline-offset-2 data-focus-visible:outline-slate-900 data-focus-visible:outline-dotted data-selected:after:scale-100"
        value="interest"
        {...register(name, { required: 'This field is required' })}
      >
        Interest Only
      </Radio>
      {error && (
        <FieldError className="mt-1 text-sm text-red-600">
          {error?.message}
        </FieldError>
      )}
    </RadioGroup>
  );
}

export default Radios;
