type Code = `+${number | string}`;

export type CountryConfig = {
  flag: string;
  code: Code;
  name: string;
  mask?: string;
};

export const countryList: CountryConfig[] = [
  {
    flag: "🇳🇿",
    code: "+64",
    name: "New Zealand",
    mask: "(___) ___-___",
  },
  {
    flag: "🇦🇸",
    code: "+1",
    name: "American Samoa",
  },
  {
    flag: "🇵🇹",
    code: "+351",
    name: "Portugal",
    mask: "__-___-____",
  },
  {
    flag: "🇺🇬",
    code: "+256",
    name: "Uganda",
  },
  {
    flag: "🇸🇪",
    code: "+46",
    name: "Sweden",
    mask: "__-___-___-__",
  },
  {
    flag: "🇹🇭",
    code: "+66",
    name: "Thailand",
  },
  {
    flag: "🇺🇿",
    code: "+998",
    name: "Uzbekistan",
  },
  {
    flag: "🇫🇷",
    code: "+33",
    name: "France",
    mask: "__ __ __ __ __",
  },
  {
    flag: "🇦🇲",
    code: "+374",
    name: "Armenia",
    mask: "__-___-___",
  },
  {
    flag: "🇬🇪",
    code: "+995",
    name: "Georgia",
    mask: "(___) ___-___",
  },
  {
    flag: "🇲🇦",
    code: "+212",
    name: "Morocco",
    mask: "___ __ __ __",
  },
  {
    flag: "🇩🇰",
    code: "+45",
    name: "Denmark",
    mask: "__ __ __ __",
  },
];
