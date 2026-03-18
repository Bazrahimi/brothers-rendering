import EmailLayout from "@/app/_ui/email/layout/EmailLayout";
import { Enquiry } from "@/app/(pages)/contact-us/_lib/schema";
import { Hr, Text } from "@react-email/components";

type Props = {
  data: Enquiry;
  dontReplyNote?: boolean;
  dontReplyFarsiNote?: boolean;
};

export default function NewEnquiry({
  data,
  dontReplyNote = true,
  dontReplyFarsiNote = false,
}: Props) {
  return (
    <EmailLayout preview={data.fullName} title="New Web Enquiry Received">
      <Text>
        <strong>Name:</strong> {data.fullName}
      </Text>
      <Text>
        <strong>Email:</strong> {data.email}
      </Text>
      <Text>
        <strong>Phone:</strong> {data.contactNumber}
      </Text>

      {data.qMessage ? (
        <>
          <Hr />
          <Text style={{ whiteSpace: "pre-wrap" }}>{data.qMessage}</Text>
        </>
      ) : null}

      {dontReplyNote ? (
        <>
          <Hr />
          <Text style={{ fontSize: "12px", color: "#6b7280", lineHeight: "18px" }}>
            <strong>Note:</strong> Please do not reply to this email. This inbox is
            for website enquiries only.
          </Text>

          {dontReplyFarsiNote ? (
            <Text
              style={{
                fontSize: "12px",
                color: "#6b7280",
                lineHeight: "18px",
                direction: "rtl",
                textAlign: "right",
              }}
            >
              <strong>یادآوری:</strong> لطفاً به این ایمیل پاسخ ندهید. این ایمیل فقط
              برای دریافت پیام‌های وبسایت است.
            </Text>
          ) : null}
        </>
      ) : null}
    </EmailLayout>
  );
}