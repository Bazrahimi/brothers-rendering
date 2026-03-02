import { Resend } from "resend";
import "server-only";
import { serverEnv } from "../env/server";
import { ORG_PROFILE } from "../org/profile";

export const emailClient = new Resend(serverEnv.resendApiKey);

export const FROM_EMAIL = `${ORG_PROFILE.orgName} <info@mgrbuildinggroup.com.au>`;
export const WEB_ENQUIRY = `Web Enquiry <info@${ORG_PROFILE.domain}>`;
export const ORG_EMAIL = ORG_PROFILE.email;
