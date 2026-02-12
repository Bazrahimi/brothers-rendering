import EmailFooter from "@/app/_lib/email/components/EmailFooter";
import { Enquiry } from "@/app/contact-us/_lib/schema";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
type Props = {
  data: Enquiry;
  dontReplyNote?: boolean;
  dontReplyFarsiNote?: boolean;
};

const NewEnquiry = ({
  data,
  dontReplyNote = true,
  dontReplyFarsiNote = false,
}: Props) => {
  return (
    <Html>
      <Head />
      <Preview>{data.fullName}</Preview>
      <Body
        style={{ backgroundColor: "#ffffff", fontFamily: "Arial, sans-serif" }}
      >
        <Container
          style={{ margin: "24px auto", padding: "16px", maxWidth: "640px" }}
        >
          <Section>
            <Heading as="h2">New Web Enquiry Received</Heading>
            <Hr />
            <Text>
              <strong>Name:</strong> {data.fullName}
            </Text>
            <Text>
              <strong>Email:</strong> {data.email}
            </Text>
            <Text>
              <strong>Phone:</strong> {data.contactNumber}
            </Text>
            <Text>
              <strong>Query Type:</strong> {String(data.queryTypeLabel)}
            </Text>
            {data.qMessage && (
              <>
                <Hr />
                <Text style={{ whiteSpace: "pre-wrap" }}>{data.qMessage}</Text>
              </>
            )}

            {dontReplyNote === true ? (
              <>
                <Hr />

                <Text
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                    lineHeight: "18px",
                  }}
                >
                  <strong>Note:</strong> Please do not reply to this email. This
                  inbox is for website enquiries only.
                </Text>

                {dontReplyFarsiNote === true && (
                  <Text
                      style={{
                        fontSize: "12px",
                        color: "#6b7280",
                        lineHeight: "18px",
                        direction: "rtl",
                        textAlign: "right",
                      }}
                    >
                      <strong>یادآوری:</strong> لطفاً به این ایمیل پاسخ ندهید. این
                      ایمیل فقط برای دریافت پیام‌های وبسایت است.
                  </Text>
                  
                )}

            </>
            ) : null}
          </Section>
        </Container>
        <EmailFooter />
      </Body>
    </Html>
  );
};

export default NewEnquiry;
