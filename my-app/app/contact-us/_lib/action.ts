"use server";

import { toActionErrors } from "@/app/_lib/utils/slugify";
import { EnquiryForm, EnquirySchema, EnquiryState } from "./schema";

export const submitEnquiry = async (
  prevState: EnquiryState | undefined,
  formData: FormData,
): Promise<EnquiryState | undefined> => {
  console.log("FormData_______", formData);
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

  console.log("Data______________", data);
};
