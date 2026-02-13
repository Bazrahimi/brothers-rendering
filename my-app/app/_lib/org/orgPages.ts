import type {
  AsTag,
  HeadingAlign,
  HeadingSize,
} from "@/app/_ui/typography/Header";
import { ORG_PROFILE } from "./profile";

const introduction = {
  title: `About ${ORG_PROFILE.orgName}`,
  id: "introduction",
  items: [
    "Hazara Shamama Association is a community-based, volunteer-led organisation located in Melbourne’s South-Eastern suburbs. We exist to support Australian Hazara community members by creating culturally safe spaces grounded in care, dignity, and belonging.",
    "Many families in our community have experienced displacement, loss, significant life transitions and language barriers. Hazara Shamama Association responds to these realities with compassion, practical support, and community connection — helping individuals and families feel supported as they rebuild their lives in Australia.",
  ],
};

const headingsAndParagraphs = {
  purpose: {
        id: "purpose",
      title: "Our Purpose",
      items: [
        "Our purpose is to strengthen the wellbeing of Hazara community and families by providing culturally informed support, connection, and guidance. We aim to reduce isolation, improve access to services, and support families to navigate life in Australia with confidence and dignity.",
      ],
  },

  vision:   {

      id: "vision",
      title: "Our Vision",
      items: [
        "We envision a community where Hazara families feel safe, respected, and empowered—where children grow up supported, and families are connected to one another and to the wider Australian community. We also envision a future in which the Hazara community is recognised for its distinct cultural heritage and history, rather than being defined under identities or names that carry trauma for many Hazara people.",
      ],
    },

  what_we_do:    {
  
      id: "what-we-do",
      title: "What We Do",
      items: [
        "Hazara Shamama Association delivers and supports initiatives including community gatherings, women-focused programs, family support activities, information sessions, and referrals to trusted local services.",
      ],
    },

  governance:   {

      id: "governance",
      title: "Governance and Business Structure",
      items: [
        `${ORG_PROFILE.orgName} is a Pty Ltd with an ABN registered for GST. ABN: ${ORG_PROFILE.abn}.`,
      ],
    },
}

const lists =   {
      type: "list",
      id: "values",
      title: "Our Values",
      icon: "check",
      items: [
        "Responding to community need with empathy and respect.",
        "Honouring the lived experiences of individuals and families.",
        "Creating spaces where people feel understood and respected.",
      ],
    },

export const aboutUsArray = [
  introduction: introduction,
  headingsAndParagraphs: headingsAndParagraphs,
  lists: lists,



]

export type AboutSection =
  | {
      type: "text";
      id: string;
      title: string;
      headingTag?: AsTag;
      headingSize?: HeadingSize;
      headingAlign?: HeadingAlign;
      headerClassName?: string;
      items: string[];
    }
  | {
      type: "list";
      id: string;
      title: string;
      headingTag?: AsTag;
      headingSize?: "md" | "sm";
      headingAlign?: HeadingAlign;
      headerClassName?: string;
      items: string[];
      icon?: "check"; // extend later if you want
    };

const teamMemberImageUrl = (name: string) => `/images/team/${name}.png`;

export const aboutUs = {
  // ✅ single source of truth
  sections: [
    {
      type: "text",
      id: "introduction",
      title: `About ${ORG_PROFILE.orgName}`,
      headingTag: "h1",
      headingSize: "md",
      headingAlign: "center",
      headerClassName: "mb-5 md:mb-10",
      items: [
        "Hazara Shamama Association is a community-based, volunteer-led organisation located in Melbourne’s South-Eastern suburbs. We exist to support Australian Hazara community members by creating culturally safe spaces grounded in care, dignity, and belonging.",
        "Many families in our community have experienced displacement, loss, significant life transitions and language barriers. Hazara Shamama Association responds to these realities with compassion, practical support, and community connection — helping individuals and families feel supported as they rebuild their lives in Australia.",
      ],
    },

    {
      type: "text",
      id: "purpose",
      title: "Our Purpose",
      items: [
        "Our purpose is to strengthen the wellbeing of Hazara community and families by providing culturally informed support, connection, and guidance. We aim to reduce isolation, improve access to services, and support families to navigate life in Australia with confidence and dignity.",
      ],
    },

    {
      type: "text",
      id: "vision",
      title: "Our Vision",
      items: [
        "We envision a community where Hazara families feel safe, respected, and empowered—where children grow up supported, and families are connected to one another and to the wider Australian community. We also envision a future in which the Hazara community is recognised for its distinct cultural heritage and history, rather than being defined under identities or names that carry trauma for many Hazara people.",
      ],
    },

    {
      type: "text",
      id: "what-we-do",
      title: "What We Do",
      items: [
        "Hazara Shamama Association delivers and supports initiatives including community gatherings, women-focused programs, family support activities, information sessions, and referrals to trusted local services.",
      ],
    },

    {
      type: "text",
      id: "governance",
      title: "Governance and Business Structure",
      items: [
        `${ORG_PROFILE.orgName} is a Pty Ltd with an ABN registered for GST. ABN: ${ORG_PROFILE.abn}.`,
      ],
    },

    {
      type: "list",
      id: "values",
      title: "Our Values",
      icon: "check",
      items: [
        "Responding to community need with empathy and respect.",
        "Honouring the lived experiences of individuals and families.",
        "Creating spaces where people feel understood and respected.",
      ],
    },
  ] as const satisfies readonly AboutSection[],

  teamMembers: [
    {
      name: "Dr Zakir Hussain",
      role: "President",
      image: teamMemberImageUrl("zakir-hussain"),
    },
    {
      name: "Nadia Nazari",
      role: "Vice President",
      image: teamMemberImageUrl("nadia-nazari"),
    },
  ],
} as const;

export const orgPages = { aboutUs } as const;
