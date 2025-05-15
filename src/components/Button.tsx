import React from 'react';

type ButtonProps = {
  children: string;
  category: 'primary' | 'link';
  onClick?: () => void;
};

function Button({ children, category, onClick }: ButtonProps) {
  if (category === 'primary')
    return (
      <button className="bg-lime text-500 hover:bg-lime/50 focus-visible:bg-lime/50 flex w-full cursor-pointer justify-center gap-100 rounded-full px-500 py-200 text-slate-900 transition-colors duration-300 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 focus-visible:outline-dotted">
        <img src="/assets/images/icon-calculator.svg" alt="" />
        {children}
      </button>
    );

  if (category === 'link')
    return (
      <button
        onClick={onClick}
        className="text-400 cursor-pointer text-slate-700 underline transition-colors duration-300 ease-in-out hover:text-slate-900 focus-visible:rounded-sm focus-visible:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 focus-visible:outline-dotted"
        type="reset"
      >
        {children}
      </button>
    );
}

export default Button;
