"use server";

import { APP_CONFIG } from "@/src/config/appConfig";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(formData: FormData): Promise<ContactFormState> {
  try {
    const webhookUrl = APP_CONFIG.MAKE_WEBHOOK_URL;
    const apiKey = APP_CONFIG.MAKE_API_KEY;

    if (!webhookUrl) {
      console.error("MAKE_WEBHOOK_URL is not configured");
      return { success: false, error: "Server configuration error" };
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "x-make-apikey": apiKey,
      },
      body: formData,
    });

    if (!res.ok) {
      console.error("Webhook response not ok:", res.status);
      return { success: false, error: "Failed to submit form" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: "Server error" };
  }
}
