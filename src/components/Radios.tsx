import type { FieldError, UseFormRegister } from 'react-hook-form';
import type { Inputs } from '../types';

type RadiosProps = {
  label: string;
  name: keyof Inputs;
  register: UseFormRegister<Inputs>;
  error?: FieldError;
};

function Radios({ label, name, register, error }: RadiosProps) {
  const groupId = `${name}-group-label`;

  return (
    <div
      role="group"
      aria-labelledby={groupId}
      className="flex flex-col gap-150"
    >
      <span id={groupId}>{label}</span>

      <label className="text-500 hover:border-lime has-[:checked]:bg-lime/15 has-[:checked]:border-lime relative flex cursor-pointer items-center gap-100 rounded-sm border border-slate-500 px-200 py-150 text-slate-900 transition-colors duration-200 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-slate-900 focus-within:outline-dotted">
        <input
          type="radio"
          value="repayment"
          {...register(name)}
          className="peer sr-only"
        />
        <div className="peer-checked:border-lime after:bg-lime relative h-[20px] w-[20px] rounded-full border-2 border-slate-700 after:absolute after:top-1/2 after:left-1/2 after:h-[11px] after:w-[11px] after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:rounded-full after:transition-transform after:duration-200 after:ease-in-out peer-checked:after:scale-100"></div>
        Repayment
      </label>

      <label className="text-500 hover:border-lime has-[:checked]:bg-lime/15 has-[:checked]:border-lime relative flex cursor-pointer items-center gap-100 rounded-sm border border-slate-500 px-200 py-150 text-slate-900 transition-colors duration-200 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-slate-900 focus-within:outline-dotted">
        <input
          type="radio"
          value="interest"
          {...register(name)}
          className="peer sr-only"
        />
        <div className="peer-checked:border-lime after:bg-lime relative h-[20px] w-[20px] rounded-full border-2 border-slate-700 after:absolute after:top-1/2 after:left-1/2 after:h-[11px] after:w-[11px] after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:rounded-full after:transition-transform after:duration-200 after:ease-in-out peer-checked:after:scale-100"></div>
        Interest Only
      </label>

      {error && <p className="text-300 text-red">{error.message}</p>}
    </div>
  );
}

export default Radios;
