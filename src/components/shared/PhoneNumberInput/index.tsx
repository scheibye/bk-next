import { useMask } from "@/src/hooks/useMask";
import { cn } from "@/src/lib/cn";
import { Input } from "@headlessui/react";
import { format } from "@react-input/mask";
import { ChangeEvent, FC, useCallback } from "react";

export type Props = {
  id: string;
  mask?: string;
  onChange: (value: string) => void;
  value: string;
};

export const PhoneNumberInput: FC<Props> = ({
  id,
  mask = "______________",
  onChange,
  value: valueProp,
}) => {
  const { options, hasEmptyMask, inputRef } = useMask({ mask });

  const value = format(valueProp, options);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(format(event.target.value, options));
    },
    [onChange, options]
  );
  return (
    <Input
      placeholder={hasEmptyMask ? "Phone number" : mask}
      ref={inputRef}
      id={id}
      className={cn(
        "w-full p-4 text-base text-gray-900 placeholder:text-gray-600 border rounded-md outline-none transition-colors duration-300",
        "border-border focus:border-gray-900"
      )}
      type="tel"
      onChange={handleChange}
      value={value}
    />
  );
};
