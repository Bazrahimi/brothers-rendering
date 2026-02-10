import { ActionState } from "@/app/_lib/ActionHelper";
import {
  SHAMAMA_QUERY_OPTIONS,
  type ShamamaQueryType,
} from "@/app/_lib/org/org-profile";
import { z } from "zod";

const QueryTypeSchema = z.coerce
  .number()
  .int()
  .refine((v): v is ShamamaQueryType => v in SHAMAMA_QUERY_OPTIONS, {
    message: "Please select your query type",
  });

export const ContactUsFormSchema = z.object({
  fullName: z.string().min(3, { message: "Please enter your full name" }),
  email: z.email({ message: "Please enter a valid email address" }).trim(),
  contactNumber: z
    .string()
    .optional()
    .refine((v) => !v || v.trim().length > 0, {
      message: "Invalid phone number",
    }),

  queryType: z.string(),
  qMessage: z.string().min(2, { message: "please enter your message" }),
});

export const ContactUsSchema = ContactUsFormSchema.extend({
  queryType: QueryTypeSchema,
});

export type ContactUs = z.infer<typeof ContactUsSchema>;
export type ContactUsForm = z.infer<typeof ContactUsFormSchema>;
export type ContactUsState = ActionState<ContactUsForm>;
