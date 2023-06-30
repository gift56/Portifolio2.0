import React, { MouseEventHandler } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: any;
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ type, text, disabled, className, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${className} p-2 px-2 rounded-lg text-base font-medium cursor-pointer transition-all duration-300 outline-none flex items-center justify-center border hover:opacity-90`}
    >
      {text}
    </button>
  );
};

export default Button;
