import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import Image from "next/image";

export function CollaborationCompaniesLogo() {
  return (
    <div className="space-y-5">
      <BodyText variant="18sb">I samarbejde med</BodyText>

      <div className="flex items-center gap-8">
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
        />
      </div>
    </div>
  );
}
