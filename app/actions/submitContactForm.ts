"use server";

export type ContactFormState = {
  success: boolean;
  error?: string;
  caseId?: string;
};

interface CasePayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description?: string;
  pageUrl?: string;
  provider?: string;
}

interface CaseResponse {
  id: string;
}

export async function submitContactForm(formData: FormData): Promise<ContactFormState> {
  try {
    const apiEndpoint = process.env.SK_API_ENDPOINT;
    const apiKey = process.env.SK_API_KEY;

    if (!apiEndpoint || !apiKey) {
      console.error("SK_API_ENDPOINT or SK_API_KEY is not configured");
      return { success: false, error: "Server configuration error" };
    }

    const casePayload: CasePayload = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      description: (formData.get("description") as string) || undefined,
      pageUrl: (formData.get("pageUrl") as string) || undefined,
      provider: (formData.get("provider") as string) || undefined,
    };

    const caseResponse = await fetch(`${apiEndpoint}/cases`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(casePayload),
    });

    if (!caseResponse.ok) {
      const errorText = await caseResponse.text();
      console.error("Case creation failed:", caseResponse.status, errorText);
      return {
        success: false,
        error: "Failed to create case",
      };
    }

    const caseData: CaseResponse = await caseResponse.json();
    const caseId = caseData.id;

    const files = formData.getAll("files") as File[];

    if (files && files.length > 0) {
      for (const file of files) {
        if (!file || file.size === 0) continue;

        const fileFormData = new FormData();
        fileFormData.append("file", file, file.name);

        const uploadResponse = await fetch(
          `${apiEndpoint}/cases/${caseId}/documents?action=upload`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: fileFormData,
          }
        );

        if (!uploadResponse.ok) {
          const errorText = await uploadResponse.text();
          console.error("Document upload failed:", uploadResponse.status, errorText);
          return {
            success: false,
            error: "Case created but file upload failed",
            caseId,
          };
        }
      }
    }

    return {
      success: true,
      caseId,
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      error: "Server error",
    };
  }
}
