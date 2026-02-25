import { Section, Text } from "@react-email/components";

export default function PoweredByKateb() {
  return (
    <Section
      style={{
        marginTop: "12px",
        paddingTop: "12px",
        borderTop: "1px solid #f3f4f6",
        textAlign: "center",
      }}
    >
      <Text
        style={{
          fontSize: "11px",
          color: "#9ca3af",
          lineHeight: "16px",
          margin: 0,
        }}
      >
        This system is powered by{" "}
        <a
          href="https://www.katebtech.com.au"
          target="_blank"
          style={{
            color: "#1d4ed8",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Kateb Tech
        </a>
        .
      </Text>
    </Section>
  );
}