import { CountryConfig } from "@/src/lib/phone-number-input/countryList";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

export const useCountryFilter = (countryList: CountryConfig[]) => {
  const [filteredList, setFilteredList] = useState(countryList);
  const [filter, setFilterState] = useState("");

  const setFilter = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFilterState(event.target.value);
      const nextCountries = countryList.filter(({ name }) =>
        name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      if (event.target.value !== "") {
        setFilteredList(nextCountries);
      } else {
        setFilteredList(countryList);
      }
    },
    [countryList]
  );

  useEffect(() => {
    setFilteredList(countryList);
  }, [countryList]);

  return { filter, setFilter, filteredList };
};
