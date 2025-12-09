"use client";

import { BodyText } from "@/src/components/shared/ui/typography/BodyText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { CheckCircle } from "lucide-react";

export function SuccessStep() {
  return (
    <div className="w-full max-w-xl lg:min-w-[450px] bg-secondary-background py-12 px-6 lg:w-fit rounded-xl flex flex-col items-center gap-4 text-center">
      <CheckCircle
        size={48}
        className="text-secondary-green"
      />

      <div className="space-y-1">
        <Headline
          as="h3"
          variant="h3"
          className="text-secondary-foreground"
        >
          Tak for din besked!
        </Headline>
        <BodyText className="text-gray-600!">
          Vi har modtaget din besked og vender tilbage til dig hurtigst muligt.
        </BodyText>
      </div>
    </div>
  );
}
