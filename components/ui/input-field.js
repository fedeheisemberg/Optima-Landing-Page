import { cn } from "@/lib/classnames";
import React from "react";

const InputField = ({
  label,
  type,
  id,
  name,
  placeholder,
  error,
  required,
  register,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={cn(
          "mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",
          {
            "hover:border-gray-400": !error,
            "border-red-500 focus:border-red-500 focus:ring-red-200": error,
          }
        )}
        {...(register && register(id, { required }))}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600">Este campo es requerido</p>
      )}
    </div>
  );
};

export default InputField;
