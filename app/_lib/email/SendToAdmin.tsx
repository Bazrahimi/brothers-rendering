"use server";
import { Enquiry } from "@/app/(pages)/contact-us/_lib/schema";
import {
  emailClient,
  ORG_EMAIL,
  WEB_ENQUIRY,
} from "@/app/_lib/email/emailClient";

import NewEnquiry from "../../_ui/email/templates/NewEnquiry";

export const sendAdminEmail = async (data: Enquiry) => {
  try {
    const result = await emailClient.emails.send({
      from: WEB_ENQUIRY,
      to: [ORG_EMAIL],
      replyTo: data.email || undefined,
      subject: `New Web Enquiry - ${data.fullName}`,
      react: <NewEnquiry data={data} />,
    });

    return result;
  } catch (error) {
    console.error("❌ Failed to send admin email:", error);
    throw error;
  }
};
