import { Resend } from "resend";
import "server-only";
import { serverEnv } from "../env/server";
import { ORG_PROFILE } from "../org/profile";

export const emailClient = new Resend(serverEnv.resendApiKey);

const kateTechEmail = "<web@katebtech.com.au>";

export const FROM_EMAIL = `${ORG_PROFILE.orgName} ${kateTechEmail}`;
export const WEB_ENQUIRY = `Web Enquiry ${kateTechEmail}`;
export const ORG_EMAIL = ORG_PROFILE.email;
