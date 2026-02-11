import { TypeOf, z } from "zod";

import { ENQUIRY_FIELDS as F } from "./constant";
import { ActionState } from "@/app/_lib/utils/ActionHelper";

export const EnquiryFormSchema = z.object({
  [F.fullName]: z.string().min(3, { message: "Please enter your full name" }),
  [F.email]: z.email({ message: "Please enter a valid email address" }).trim(),
  [F.contactNumber]: z
    .string()
    .optional()
    .refine((v) => !v || v.trim().length > 0, {
      message: "Invalid phone number",
    }),
  [F.queryType]: z.string(),
  [F.qMessage]: z.string().min(2, { message: "please enter your message" }),
});

export const EnquirySchema = EnquiryFormSchema.extend({
  [F.queryType]: z.coerce
    .number()
    .int()
    .min(1, { message: "Please select your query type" })
    .max(20, { message: "Please select your query type" }),
});

export type Enquiry = z.infer<typeof EnquirySchema>
export type EnquiryForm = z.infer<typeof EnquiryFormSchema>
export type EnquiryState = ActionState<EnquiryForm>