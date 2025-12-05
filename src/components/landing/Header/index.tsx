import { Container } from "@/src/components/shared/Container";
import { Logo } from "@/src/components/shared/Logo";
import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { ROUTES } from "@/src/config";
import Link from "next/link";

export function Header() {
  return (
    <Container
      as="header"
      variant="inner"
      className="p-0 flex justify-between items-center gap-12"
    >
      <Logo className="max-w-[180px] md:max-w-none md:w-fit" />

      <nav className="hidden md:block">
        <ul>
          <BodyText
            as={Link}
            href={ROUTES.BLOG_PAGE}
            className="relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            Blog
          </BodyText>
        </ul>
      </nav>
    </Container>
  );
}
