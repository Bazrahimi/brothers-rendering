import { publicAssets } from "@/app/_lib/org/publicAssets";
import { getBaseUrl, ORG_PROFILE } from "@/app/_lib/org/profile";
import EmailFooter from "@/app/_ui/email/components/EmailFooter";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import React from "react";
import PoweredByKateb from "../components/PoweredByKateb";

type Props = {
  preview: string;
  title?: string;
  children: React.ReactNode;
  introNote?: string;
  dir?: "ltr" | "rtl";
};

export default function EmailLayout({
  preview,
  title,
  introNote,
  dir = "ltr",
  children,
}: Props) {
  return (
    <Html dir={dir}>
      <Head />
      <Preview>{preview}</Preview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header */}
          <Section style={styles.header}>
            <Img
              src={`${getBaseUrl()}${publicAssets.icons.apple}`}
              alt={`${ORG_PROFILE.orgName} logo`}
              width={48}
              height={48}
              style={styles.logo}
            />

            <div>
              <Heading as="h1" style={styles.brand}>
                {ORG_PROFILE.orgName}
              </Heading>

              {ORG_PROFILE.orgNameFarsi ? (
                <Text style={styles.brandFarsi}>
                  {ORG_PROFILE.orgNameFarsi}
                </Text>
              ) : null}
            </div>
          </Section>

          {title ? (
            <Section style={styles.titleWrap}>
              <Heading as="h2" style={styles.title}>
                {title}
              </Heading>
            </Section>
          ) : null}

          {introNote ? (
            <Section style={styles.noteWrap}>
              <Text style={styles.note}>{introNote}</Text>
            </Section>
          ) : null}

          {/* Page content */}
          <Section style={styles.content}>{children}</Section>

          {/* Footer always */}
          <EmailFooter />
          <PoweredByKateb />
        </Container>
      </Body>
    </Html>
  );
}

const styles: Record<string, React.CSSProperties> = {
  body: {
    backgroundColor: "#ffffff",
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
  },
  container: {
    margin: "24px auto",
    padding: "16px",
    maxWidth: "640px",
  },
  header: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    paddingBottom: "8px",
  },
  logo: {
    borderRadius: "9999px",
    objectFit: "cover",
    display: "block",
  },
  brand: {
    margin: 0,
    fontSize: "18px",
    lineHeight: "24px",
  },
  brandFarsi: {
    margin: "2px 0 0 0",
    fontSize: "12px",
    color: "#6b7280",
    direction: "rtl",
    textAlign: "right",
  },
  titleWrap: {
    paddingTop: "8px",
    paddingBottom: "8px",
  },
  title: {
    margin: 0,
    fontSize: "16px",
    lineHeight: "22px",
  },
  noteWrap: {
    paddingBottom: "8px",
  },
  note: {
    margin: 0,
    fontSize: "12px",
    color: "#6b7280",
    lineHeight: "18px",
  },
  content: {
    paddingTop: "8px",
  },
};
