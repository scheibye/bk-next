"use client";

import { cn } from "@/src/lib/cn";
import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface Props {
  label: string;
  isRequired?: boolean;
  type?: string;
  placeholder?: string;
  error?: FieldError;
}

export const InputField = forwardRef<HTMLInputElement, Props>(
  ({ label, isRequired = false, type = "text", placeholder = "", error, ...rest }, ref) => {
    return (
      <div className="relative w-full">
        <label
          className={cn(
            "bg-secondary-background absolute -top-2 left-4 px-1 text-sm font-semibold",
            error ? "text-error-100" : "text-gray-900"
          )}
        >
          {label}
          {isRequired && <span className="text-error-100 ml-0.5">*</span>}
        </label>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={cn(
            "w-full p-4 text-base text-gray-900 placeholder:text-gray-600 border rounded-md outline-none transition-colors duration-300",
            error
              ? "border-error-100 focus:border-error-100"
              : "border-border focus:border-gray-900"
          )}
          {...rest}
        />
        {error && <p className="mt-1 text-sm text-error-100">{error.message}</p>}
      </div>
    );
  }
);

InputField.displayName = "InputField";
