"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled: boolean;
  required: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      <input
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        type={type}
        className={`peer w-full p-4 pt-6 outline-none by-white border-2 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed ${
          errors[id] ? "border-rose-400" : "border-slate-300"
        } ${errors[id] ? "focus-rose-400" : "focus-slate-300"}`}
      />
<label htmlFor={id} className={`absolute text-xs top-2 left-4 z-10 cursor-text peer-focus:opacity-80 ${
          errors[id] ? "border-rose-400" : "border-slate-300"
        } ${errors[id] ? "focus-rose-400" : "focus-slate-300"}`}>{label}</label>
    </div>
  );
};

export default input;
