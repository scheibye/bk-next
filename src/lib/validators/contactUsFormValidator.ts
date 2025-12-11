import { z } from "zod";

export const step1Validator = z.object({
  fullName: z.string().min(1, "Fulde navn er påkrævet"),
  email: z.email("Ugyldig e-mail adresse"),
  countryCode: z.string(),
  phone: z.string().min(1, "Telefon nr. er påkrævet"),
});

export const step2Validator = z.object({
  description: z.string().optional(),
  files: z.array(z.instanceof(File)).optional(),
});

export const contactUsValidator = step1Validator.extend(step2Validator.shape);
export type ContactUsFormSchema = z.infer<typeof contactUsValidator>;import { z } from "zod";

const phoneBase = z
  .string()
  .min(1, "Telefon nr. er påkrævet")
  .regex(/^[0-9+\s()-]+$/, "Telefon nr. må kun indeholde tal og almindelige tegn");

export const step1Validator = z.object({
  fullName: z.string().min(1, "Fulde navn er påkrævet"),
  email: z
    .string()
    .min(1, "E-mail er påkrævet")
    .email("Ugyldig e-mail adresse"),
  countryCode: z.string().min(1, "Landekode er påkrævet"),
  phone: phoneBase,
});

export const step2Validator = z.object({
  description: z.string().optional(),
  files: z.array(z.instanceof(File)).optional(),
});

// Her samler vi step 1 + 2 og laver ekstra regler for telefon
export const contactUsValidator = step1Validator
  .extend(step2Validator.shape)
  .superRefine((data, ctx) => {
    const digitsOnly = data.phone.replace(/\D/g, "");

    // DK-regel: +45 → præcis 8 cifre
    if (data.countryCode === "+45") {
      if (digitsOnly.length !== 8) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["phone"],
          message: "Danske numre skal bestå af 8 cifre.",
        });
      }
      return;
    }

    // Simple fallback for andre lande
    if (digitsOnly.length < 6) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["phone"],
        message: "Telefonnummeret ser for kort ud.",
      });
    }
  });

export type ContactUsFormSchema = z.infer<typeof contactUsValidator>;
