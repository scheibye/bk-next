"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/src/components/shared/Button";
import { InputField } from "@/src/components/shared/InputField";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { ArrowRight } from "lucide-react";

const contactUsValidator = z.object({
  fullName: z.string().min(1, "Fulde navn er påkrævet"),
  email: z.email("Ugyldig e-mail adresse"),
  phone: z.string().min(1, "Telefon nr. er påkrævet"),
});
type ContactUsSchema = z.infer<typeof contactUsValidator>;

export function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactUsSchema>({
    resolver: zodResolver(contactUsValidator),
  });

  const onSubmit = async (data: ContactUsSchema) => {
    console.log(data);
  };

  return (
    <div className="lg:min-w-[450px] bg-secondary-background py-12.5 px-10 w-fit rounded-xl flex flex-col gap-10">
      <Headline
        as="h3"
        variant="h3"
        className="text-secondary-foreground!"
      >
        Bliv kontaktet
      </Headline>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-10 space-y-6">
          <InputField
            label="Fulde navn"
            placeholder="Fornavn Efternavn"
            isRequired
            {...register("fullName")}
            error={errors.fullName}
          />
          <InputField
            label="E-mail"
            type="email"
            placeholder="youremail@domain.com"
            isRequired
            {...register("email")}
            error={errors.email}
          />
          <InputField
            label="Telefon nr."
            placeholder="+45 12 34 56 78"
            isRequired
            {...register("phone")}
            error={errors.phone}
          />
        </div>

        <Button
          type="submit"
          variant="secondary"
          disabled={isSubmitting}
          className="flex items-center justify-between"
        >
          {/* empty div for spacing */}
          <div className="size-5 shrink-0" />

          {isSubmitting ? "Sender..." : "Kom i gang"}

          <ArrowRight
            size={20}
            className="text-foreground"
          />
        </Button>
      </form>
    </div>
  );
}
