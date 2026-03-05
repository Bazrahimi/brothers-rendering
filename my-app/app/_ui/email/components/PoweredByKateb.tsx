import { KATEB_LOGO } from "@/app/_lib/utils/assets";
import { Img, Link, Section, Text } from "@react-email/components";

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
      <Link
        href="https://www.katebtech.com.au"
        target="_blank"
        style={{
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Img
          src={KATEB_LOGO}
          width="20"
          height="20"
          alt="Kateb Tech"
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            marginRight: "6px",
          }}
        />

        <Text
          style={{
            fontSize: "11px",
            color: "#9ca3af",
            lineHeight: "16px",
            margin: 0,
          }}
        >
          Powered by{" "}
          <span
            style={{
              color: "#f59e0b",
              fontWeight: 600,
            }}
          >
            Kateb Tech
          </span>
        </Text>
      </Link>
    </Section>
  );
}
