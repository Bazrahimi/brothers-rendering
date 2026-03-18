"use server";

import { Enquiry } from "@/app/(pages)/contact-us/_lib/schema";

import {
  emailClient,
  FROM_EMAIL,
  ORG_EMAIL,
} from "@/app/_lib/email/emailClient";
import NewEnquiry from "@/app/_ui/email/templates/NewEnquiry";

export const sendUserConfirmationEmail = async (data: Enquiry) => {
  return emailClient.emails.send({
    from: FROM_EMAIL,
    to: [data.email],
    replyTo: ORG_EMAIL,
    subject: `We’ve received your enquiry – ${data.fullName}`,
    react: <NewEnquiry data={data} />,
  });
};
