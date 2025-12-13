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

    console.log("=== CONTACT FORM SUBMISSION START ===");

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

    console.log("Creating case with payload:", JSON.stringify(casePayload, null, 2));
    console.log("Full URL:", `${apiEndpoint}/cases`);

    const caseResponse = await fetch(`${apiEndpoint}/cases`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(casePayload),
    });

    console.log("Case creation response status:", caseResponse.status);
    console.log(
      "Case creation response headers:",
      Object.fromEntries(caseResponse.headers.entries())
    );

    if (!caseResponse.ok) {
      const errorText = await caseResponse.text();
      console.error("Case creation failed!");
      console.error("Status:", caseResponse.status);
      console.error("Status Text:", caseResponse.statusText);
      console.error("Error body:", errorText);

      return {
        success: false,
        error: `Failed to create case: ${caseResponse.status} - ${errorText.substring(0, 100)}`,
      };
    }

    const caseData: CaseResponse = await caseResponse.json();
    const caseId = caseData.id;

    console.log("Case created successfully! Case ID:", caseId);
    console.log("Full case response:", JSON.stringify(caseData, null, 2));

    const files = formData.getAll("files") as File[];

    console.log("Files to upload:", files.length);

    if (files && files.length > 0) {
      console.log(`Uploading ${files.length} file(s)...`);

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (!file || file.size === 0) {
          console.log(`Skipping empty file at index ${i}`);
          continue;
        }

        console.log(`Uploading file ${i + 1}/${files.length}:`, {
          name: file.name,
          size: file.size,
          type: file.type,
        });

        const fileFormData = new FormData();
        fileFormData.append("file", file, file.name);

        const uploadUrl = `${apiEndpoint}/cases/${caseId}/documents?action=upload`;
        console.log("Upload URL:", uploadUrl);

        const uploadResponse = await fetch(uploadUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: fileFormData,
        });

        console.log("Upload response status:", uploadResponse.status);

        if (!uploadResponse.ok) {
          const errorText = await uploadResponse.text();
          console.error("Document upload failed!");
          console.error("Status:", uploadResponse.status);
          console.error("Status Text:", uploadResponse.statusText);
          console.error("Error body:", errorText);

          return {
            success: false,
            error: `Case created but file ${file.name} upload failed: ${uploadResponse.status}`,
            caseId,
          };
        }

        console.log(`File uploaded successfully: ${file.name}`);
      }
    } else {
      console.log("No files to upload");
    }

    console.log("=== CONTACT FORM SUBMISSION SUCCESS ===");
    console.log("Case ID:", caseId);
    console.log("Files uploaded:", files.length);

    return {
      success: true,
      caseId,
    };
  } catch (error) {
    console.error("=== CONTACT FORM SUBMISSION ERROR ===");
    console.error("Error type:", error instanceof Error ? error.constructor.name : typeof error);
    console.error("Error message:", error instanceof Error ? error.message : String(error));
    console.error("Error stack:", error instanceof Error ? error.stack : "N/A");

    return {
      success: false,
      error: `Server error: ${error instanceof Error ? error.message : "Unknown error"}`,
    };
  }
}
