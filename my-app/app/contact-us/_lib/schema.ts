import { z } from "zod";

import { ActionState } from "@/app/_lib/utils/slugify";
import { ENQUIRY_FIELDS as F } from "./constant";

export const EnquirySchema = z.object({
  [F.fullName]: z.string().min(3, { message: "Please enter your full name" }),
  [F.email]: z.email({ message: "Please enter a valid email address" }).trim(),
  [F.contactNumber]: z
    .string()
    .optional()
    .refine((v) => !v || v.trim().length > 0, {
      message: "Invalid phone number",
    }),
  [F.queryType]: z.string().min(4, { message: "please select your Query Type" }),
  [F.qMessage]: z.string().min(2, { message: "please enter your message" }),
});



export type Enquiry = z.infer<typeof EnquirySchema>;
export type EnquiryForm = z.infer<typeof EnquirySchema>;
export type EnquiryState = ActionState<EnquiryForm>;
