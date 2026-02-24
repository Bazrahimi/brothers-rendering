"use server";

import { toActionErrors } from "@/app/_lib/utils/actionHelper";
import { handleEnquiryEmails } from "./handleEnquiryEmail";
import { EnquiryForm, EnquirySchema, EnquiryState } from "./schema";

export const submitEnquiry = async (
  prevState: EnquiryState | undefined,
  formData: FormData,
): Promise<EnquiryState | undefined> => {
  const rawData = Object.fromEntries(
    [...formData.entries()].map(([key, value]) => [
      key,
      typeof value === "string" ? value : undefined,
    ]),
  ) as Partial<EnquiryForm>;

  const parsed = EnquirySchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      ...toActionErrors<EnquiryState["errors"]>(parsed.error),
      data: rawData,
    };
  }

  const data = parsed.data;

  const { message } = await handleEnquiryEmails(data);

  return {
    ok: true,
    message: message,
  };
};
