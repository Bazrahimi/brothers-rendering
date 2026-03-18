"use client";

import { ORG_PROFILE } from "@/app/_lib/org/profile";
import ActionButton from "@/app/_ui/button/ActionButton";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
type ContactSuccessMessageProps = {
  onReset?: () => void;
};

export function ContactSuccessMessage({ onReset }: ContactSuccessMessageProps) {
  return (
    <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <Header  as="h3" size="sm">
        Message sent ✅
      </Header>

      <P className="text-gray-700">
        Thank you for contacting <strong>{ORG_PROFILE.orgName}</strong>. We’ve
        received your enquiry and will reply as early as possible.
      </P>

      <P className="text-gray-700">
        تشکر. که قد مو <strong>{ORG_PROFILE.orgNameFarsi}</strong> تماس گرفتین.
        پیام شما به ما رسید، در اولین فرصت جواب می‌دیم.
      </P>

      <div className="rounded-lg bg-gray-50 p-4  text-gray-700">
        <P className="font-medium mb-1">
          If you don’t receive a response, please contact us:
        </P>

        <P>
          Phone:{" "}
          <a className="underline" href={`tel:${ORG_PROFILE.phone}`}>
            {ORG_PROFILE.phone}
          </a>
        </P>

        <P>
          Email:{" "}
          <a className="underline" href={`mailto:${ORG_PROFILE.email}`}>
            {ORG_PROFILE.email}
          </a>
        </P>

        <p className="mt-2 text-gray-600">Address: {ORG_PROFILE.address}</p>
      </div>

      {onReset ? (
        <div className="flex justify-center">
          <ActionButton
            type="button"
            onClick={onReset}
            buttonClassName="bg-shamama-orange-main hover:bg-shamama-orange-light"
          >
            Becoming a Member
          </ActionButton>
        </div>
      ) : null}
    </div>
  );
}
