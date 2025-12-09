import { CountryConfig } from "@/src/lib/phone-number-input/countryList";
import { useCallback, useEffect, useMemo, useState } from "react";

export type Props = {
  countryList: CountryConfig[];
  value: string;
  onChange: (value?: string) => void;
};

export const useCountrySelect = ({ value, onChange, countryList }: Props) => {
  const [selected, setSelected] = useState(value);

  const handleSelect = useCallback(
    (selectedCode: string) => {
      onChange(selectedCode);
      setSelected(selectedCode);
    },
    [onChange]
  );

  const selectedFlag = useMemo(
    () => countryList.find(({ code }) => code === selected)?.flag,
    [countryList, selected]
  );

  useEffect(() => {
    setSelected(value);
  }, [value]);

  return { selected, handleSelect, selectedFlag };
};
