import { Resend } from "resend";
import "server-only";
import { serverEnv } from "../env";
import { ORG_PROFILE } from "../org";

export const emailClient = new Resend(serverEnv.resendApiKey);

export const FROM_EMAIL = `${ORG_PROFILE.orgName} <info@${ORG_PROFILE.domain}>`;
export const WEBSITE_ENQUIRY = `Website Enquiry <info@${ORG_PROFILE.domain}>`;
export const ENQUIRY_ADMIN_EMAIL = ORG_PROFILE.email;
