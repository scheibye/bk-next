import { Headline } from "../../shared/ui/typography/Headline";

interface Props {
  value: number;
  currency?: string;
}

export function BudjetFormatter({ value, currency = "DKK" }: Props) {
  const valueToDisplay = value.toLocaleString("da-DK", {
    style: "currency",
    currency,
  });

  return (
    <Headline
      as="p"
      variant="h4"
      className="text-secondary-foreground!"
    >
      {valueToDisplay}
    </Headline>
  );
}
