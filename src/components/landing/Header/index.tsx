import { Container } from "@/src/components/shared/Container";
import { Logo } from "@/src/components/shared/Logo";

export function Header() {
  return (
    <Container
      as="header"
      variant="inner"
      className="p-0"
    >
      <Logo />
    </Container>
  );
}
