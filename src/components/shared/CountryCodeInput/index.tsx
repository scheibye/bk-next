import { Input, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { FC } from "react";

import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { useCountryFilter } from "@/src/hooks/useCountryFilter";
import { useCountrySelect } from "@/src/hooks/useCountrySelect";
import { cn } from "@/src/lib/cn";
import { CountryConfig } from "@/src/lib/phone-number-input/countryList";
import { ChevronDown } from "lucide-react";

const ANCHOR_PROP = { to: "bottom start" as const, gap: "12px" };

export type Props = {
  countryList: CountryConfig[];
  value: string;
  onChange: (value?: string) => void;
};

export const CountryCodeInput: FC<Props> = ({ countryList, value, onChange }) => {
  // country list filter logic
  const { filter, setFilter, filteredList } = useCountryFilter(countryList);

  // country list selection logic
  const { selectedFlag, handleSelect, selected } = useCountrySelect({
    onChange,
    countryList,
    value,
  });

  return (
    <div className="w-36">
      <Listbox
        value={selected}
        onChange={handleSelect}
      >
        <ListboxButton
          className={cn(
            "relative w-full py-4 px-2 text-base text-gray-900 placeholder:text-gray-600 border rounded-md outline-none transition-colors duration-300 flex items-center gap-2",
            "border-border focus:border-gray-900"
          )}
        >
          <span className="text-xl">{selectedFlag}</span>
          <span className="ml-auto grow-0">{selected}</span>
          <ChevronDown className="size-4 shrink-0 text-gray-900" />
        </ListboxButton>
        <ListboxOptions
          anchor={ANCHOR_PROP}
          transition
          className={cn(
            "w-56 rounded-md border border-border bg-gray-100 focus-visible:outline-none z-10",
            "flex flex-col",
            "origin-top transition duration-200 ease-in data-closed:scale-95 data-closed:opacity-0",
            "shadow-md shadow-black/20"
          )}
        >
          {countryList.length > 5 && (
            <div className="border-b-2 border-b-border p-2">
              <Input
                value={filter}
                onChange={setFilter}
                placeholder="Landets navn"
                className="max-w-full w-full rounded-md bg-gray-200 px-4 py-2 focus:outline-none text-sm text-gray-900"
              />
            </div>
          )}
          <div className="max-h-48 grow overflow-auto">
            {filteredList.map(({ code, flag, name }) => (
              <ListboxOption
                key={code}
                value={code}
                className="group flex cursor-pointer select-none items-center gap-1 p-1.5 data-focus:bg-gray-200"
              >
                <span className="text-xl/5">{flag}</span>
                <BodyText className="w-9 shrink-0 text-right text-secondary-foreground! tabular-nums">
                  {code}
                </BodyText>
                <BodyText className="mx-2 truncate text-secondary-foreground/40!">{name}</BodyText>
              </ListboxOption>
            ))}
            {filteredList.length === 0 && (
              <BodyText
                variant="14"
                className="py-1.5 text-center text-secondary-foreground!"
              >
                No results
              </BodyText>
            )}
          </div>
        </ListboxOptions>
      </Listbox>
    </div>
  );
};
