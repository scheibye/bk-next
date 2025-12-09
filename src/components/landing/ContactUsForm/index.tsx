"use client";

import { Field } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useId, useState } from "react";
import { Controller, useForm } from "react-hook-form";

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
import { ArrowLeft, ArrowRight } from "lucide-react";

const DEFAULT_COUNTRY_CODE = "+45";

export function ContactUsForm() {
  const id = useId();

  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState<string>(DEFAULT_COUNTRY_CODE);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCodeChange = useCallback((nextCode?: string) => {
    if (nextCode) {
      setCountryCode(nextCode);
    }
  }, []);

  const mask = countryList.find(({ code }) => code === countryCode)?.mask;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    trigger,
  } = useForm<ContactUsFormSchema>({
    resolver: zodResolver(contactUsValidator),
    defaultValues: {
      countryCode: DEFAULT_COUNTRY_CODE,
      files: [],
    },
  });

  const onSubmit = async (data: ContactUsFormSchema) => {
    const apiKey = process.env.NEXT_PUBLIC_MAKE_API_KEY;
    if (!apiKey) {
      console.error("Make API key is missing");
      return;
    }

    const payload = {
      ...data,
      phone: `${countryCode}${phoneNumber}`,
    };

    try {
      // await axios.post("https://hook.eu1.make.com/u9dbs04hz3f8on87iugkw1rgfwb2vz1s", payload, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     "x-make-apikey": apiKey,
      //   },
      // });
      console.log("Form submitted successfully:", payload);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission failed:", err);
    }
  };

  const handleNextStep = async () => {
    const isValid = await trigger(["fullName", "email", "phone"]);
    if (isValid) {
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  if (isSubmitted) {
    return <SuccessStep />;
  }

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

      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <div className="mb-8 space-y-6">
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

            <Field className="flex flex-col gap-2">
              <label className="px-1 text-sm font-semibold text-gray-900">
                Telefon nr. <span className="text-error-100">*</span>
              </label>
              <div className="flex gap-2">
                <Controller
                  name="countryCode"
                  control={control}
                  defaultValue={DEFAULT_COUNTRY_CODE}
                  render={({ field }) => (
                    <CountryCodeInput
                      countryList={countryList}
                      value={field.value}
                      onChange={(v) => {
                        field.onChange(v);
                        handleCodeChange(v);
                      }}
                    />
                  )}
                />

                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <PhoneNumberInput
                      id={id}
                      mask={mask}
                      value={field.value || ""}
                      onChange={(v) => {
                        field.onChange(v);
                        setPhoneNumber(v);
                      }}
                    />
                  )}
                />
              </div>

              {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
            </Field>
          </div>
        )}

        {step === 2 && (
          <div className="mb-8 space-y-6">
            <div className="flex flex-col gap-2">
              <label className="px-1 text-sm font-semibold text-gray-900">Beskrivelse</label>
              <textarea
                placeholder="Fortæl os om dit projekt eller hvad vi kan hjælpe med..."
                {...register("description")}
                rows={4}
                className={cn(
                  "w-full rounded-md px-3 py-2.5 text-sm text-secondary-foreground placeholder:text-gray-600",
                  "border border-border resize-none outline-none"
                )}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="px-1 text-sm font-semibold text-gray-900">Upload filer</label>
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
              className="flex flex-1 items-center justify-between group"
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
