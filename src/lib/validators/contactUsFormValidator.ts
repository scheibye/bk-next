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
export type ContactUsFormSchema = z.infer<typeof contactUsValidator>;