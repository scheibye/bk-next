"use client";

import { Field } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useId, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { submitContactForm } from "@/app/actions/submitContactForm";
import { SuccessStep } from "@/src/components/landing/ContactUsForm/SuccessStep";
import { Button } from "@/src/components/shared/Button";
import { CountryCodeInput } from "@/src/components/shared/CountryCodeInput";
import { DragAndDropArea } from "@/src/components/shared/DragAndDropArea";
import { InputField } from "@/src/components/shared/InputField";
import { PhoneNumberInput } from "@/src/components/shared/PhoneNumberInput";
import { ErrorText } from "@/src/components/shared/ui/typography/ErrorText";
import { Headline } from "@/src/components/shared/ui/typography/Headline";
import { cn } from "@/src/lib/cn";
import { countryList } from "@/src/lib/phone-number-input/countryList";
import {
  ContactUsFormSchema,
  contactUsValidator,
} from "@/src/lib/validators/contactUsFormValidator";

const DEFAULT_COUNTRY_CODE = "+45";

export function ContactUsForm() {
  const id = useId();

  const [step, setStep] = useState(1);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    trigger,
    setError,
    watch,
  } = useForm<ContactUsFormSchema>({
    resolver: zodResolver(contactUsValidator),
    defaultValues: {
      countryCode: DEFAULT_COUNTRY_CODE,
      files: [],
    },
  });

  const selectedCode = watch("countryCode");
  const mask = countryList.find(({ code }) => code === selectedCode)?.mask;

  const onSubmit = async (data: ContactUsFormSchema) => {
    if (step !== 2) return;

    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("phone", `${data.countryCode}${data.phone.replace(/\D/g, "")}`);
    formData.append("description", data.description || "");
    formData.append("pageUrl", window.location.href || "");
    formData.append("provider", "byggekredit");

    if (data.files?.length) {
      for (const file of data.files) {
        formData.append("files", file);
      }
    }

    const result = await submitContactForm(formData);

    if (result.success) {
      setIsSubmitSuccessful(true);
    } else {
      setError("root.serverError", {
        message: result.error || "Der opstod en fejl under afsendelse. Prøv venligst igen.",
      });
    }
  };

  const handleNextStep = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const isValid = await trigger(["firstName", "lastName", "email", "phone", "countryCode"]);
    if (isValid) {
      setStep(2);
    }
  };

  const handlePrevStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setStep(1);
  };

  if (isSubmitSuccessful) {
    return <SuccessStep />;
  }

  const phoneErrorId = `${id}-phone-error`;
  const descriptionErrorId = `${id}-description-error`;

  return (
    <div className="w-full max-w-xl lg:min-w-[450px] bg-secondary-background py-8 md:py-12.5 px-4 md:px-10 lg:w-fit rounded-xl flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Headline
          as="h3"
          variant="h3"
          className="text-secondary-foreground"
        >
          Bliv kontaktet
        </Headline>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="on"
        noValidate
      >
        {step === 1 && (
          <div className="mb-8 space-y-6">
            <InputField
              label="Fornavn"
              placeholder="Dit fornavn"
              autoComplete="given-name"
              isRequired
              autoFocus
              aria-invalid={!!errors.firstName}
              {...register("firstName")}
              error={errors.firstName}
            />

            <InputField
              label="Efternavn"
              placeholder="Dit efternavn"
              autoComplete="family-name"
              isRequired
              aria-invalid={!!errors.lastName}
              {...register("lastName")}
              error={errors.lastName}
            />

            <InputField
              label="E-mail"
              type="email"
              autoComplete="email"
              placeholder="din@email.dk"
              isRequired
              aria-invalid={!!errors.email}
              {...register("email")}
              error={errors.email}
            />

            <Field className="flex flex-col gap-2">
              <label className="px-1 text-sm font-semibold text-gray-900">
                Telefonnummer <span className="text-error-100">*</span>
              </label>

              <div className="flex gap-2">
                <Controller
                  name="countryCode"
                  control={control}
                  render={({ field }) => (
                    <CountryCodeInput
                      countryList={countryList}
                      value={field.value}
                      onChange={field.onChange}
                      autoComplete="tel-country-code"
                      aria-label="Landekode"
                      aria-invalid={!!errors.countryCode}
                      aria-describedby={
                        errors.phone || errors.countryCode ? phoneErrorId : undefined
                      }
                    />
                  )}
                />

                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <PhoneNumberInput
                      id={id}
                      mask={mask}
                      value={field.value || ""}
                      onChange={field.onChange}
                      autoComplete="tel-national"
                      aria-invalid={!!errors.phone}
                      aria-describedby={
                        errors.phone || errors.countryCode ? phoneErrorId : undefined
                      }
                    />
                  )}
                />
              </div>

              {(errors.phone || errors.countryCode) && (
                <ErrorText>
                  <span id={phoneErrorId}>
                    {errors.phone?.message || errors.countryCode?.message}
                  </span>
                </ErrorText>
              )}
            </Field>
          </div>
        )}

        {step === 2 && (
          <div className="mb-8 space-y-6">
            <div className="flex flex-col gap-2">
              <label className="px-1 text-sm font-semibold text-gray-900">
                Beskrivelse af din henvendelse
              </label>

              <textarea
                {...register("description")}
                placeholder="Fortæl kort om dit projekt, eller hvad du har brug for hjælp til."
                rows={4}
                autoComplete="off"
                autoFocus
                aria-invalid={!!errors.description}
                aria-describedby={errors.description ? descriptionErrorId : undefined}
                className={cn(
                  "w-full rounded-md px-3 py-2.5 text-sm text-secondary-foreground placeholder:text-gray-600",
                  "border border-border resize-none outline-none"
                )}
              />
              {errors.description && (
                <ErrorText>
                  <span id={descriptionErrorId}>{errors.description.message}</span>
                </ErrorText>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="px-1 text-sm font-semibold text-gray-900">
                Vedhæft filer (valgfrit)
              </label>

              <Controller
                name="files"
                control={control}
                render={({ field }) => (
                  <DragAndDropArea
                    files={field.value || []}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          </div>
        )}

        {errors.root?.serverError && (
          <ErrorText className="mb-2">{errors.root.serverError.message}</ErrorText>
        )}

        <div className="flex gap-3">
          {step === 2 && (
            <Button
              type="button"
              variant="transparent"
              onClick={handlePrevStep}
              className="w-fit"
            >
              <ArrowLeft
                size={20}
                className="text-gray-900"
              />
            </Button>
          )}

          {step === 1 ? (
            <Button
              type="button"
              variant="secondary"
              onClick={handleNextStep}
              disabled={isSubmitting}
              className="flex flex-1 items-center justify-between group"
            >
              <div className="size-5 shrink-0" />
              Næste
              <ArrowRight
                size={20}
                className="text-foreground transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="secondary"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className={cn(
                "flex flex-1 items-center justify-between group",
                isSubmitting && "opacity-50"
              )}
            >
              <div className="size-5 shrink-0" />
              {isSubmitting ? "Sender..." : "Send"}
              <ArrowRight
                size={20}
                className="text-foreground transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
