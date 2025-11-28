import { Headline } from "@/src/components/shared/ui/typography/Headline";

interface Props {
  value: number;
  currency?: string;
}

export function BudjetFormatter({ value, currency = "DKK" }: Props) {
  const valueToDisplay = value;

  return (
    <Headline
      as="p"
      variant="h4"
      className="text-secondary-foreground!"
    >
      {currency} {valueToDisplay}
    </Headline>
  );
}
