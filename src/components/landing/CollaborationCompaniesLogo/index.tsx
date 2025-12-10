import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { cn } from "@/src/lib/cn";
import Image from "next/image";
import { HTMLAttributes } from "react";

export function CollaborationCompaniesLogo({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("space-y-5", className)}
      {...rest}
    >
      <BodyText variant="18Semibold">I samarbejde med</BodyText>

      <div className="grid grid-cols-2 sm:flex items-center gap-8">
        <Image
          src="/simpel-kredit-logo.svg"
          alt="simpel kredit logo"
          width={180}
          height={36}
          draggable={false}
        />
        <Image
          src="/dansk-boliglan-logo.svg"
          alt="dansk boliglan logo"
          width={100}
          height={50}
          draggable={false}
          className="hidden md:block"
        />
        <Image
          src="/dansk-boliglan-mobile-logo.svg"
          alt="dansk boliglan logo"
          width={160}
          height={32}
          draggable={false}
          className="md:hidden"
        />
      </div>
    </div>
  );
}
