// app/_lib/org/aboutUs.ts
import { ORG_PROFILE } from "../profile";

export type TeamMember = {
  name: string;
  role: string;
  image?: string; // "/images/team/....png"
  bio?: string;
};

export type TeamSection = {
  id: string;
  title: string;
  intro: string; // paragraph under the heading
  professionalTitles?: readonly string[];
  members: readonly TeamMember[];
};

export const ABOUT_TEAM: TeamSection = {
  id: "team",
  title: "Our Team",
  professionalTitles: [
    "Painters and Decorators",
    "Solid Plasterers",
    "Professional Tilers",
  ],
  intro: `${ORG_PROFILE.orgName} is guided by experienced tradespeople and community leaders.`,
  members: [
    {
      name: "Dr Zakir Hussain",
      role: "President",
      image: "/images/team/zakir-hussain.png",
    },
    {
      name: "Nadia Nazari",
      role: "Vice President",
      image: "/images/team/zakir-hussain.png",
    },
  ],
} as const;


export type TextSection = {
  id: string;
  title: string;
  items: readonly string[];
};

export type ValuesSection = {
  id: string;
  title: string;
  items: readonly string[];
  icon?: "check";
};

export const ABOUT_INTRODUCTION: TextSection = {
  id: "introduction",
  title: `About ${ORG_PROFILE.orgName}`,
  items: [
    "Hazara Shamama Association is a community-based, volunteer-led organisation located in Melbourne’s South-Eastern suburbs. We exist to support Australian Hazara community members by creating culturally safe spaces grounded in care, dignity, and belonging.",
    "Many families in our community have experienced displacement, loss, significant life transitions and language barriers. Hazara Shamama Association responds to these realities with compassion, practical support, and community connection — helping individuals and families feel supported as they rebuild their lives in Australia.",
  ],
} as const;

export const ABOUT_SECTIONS: readonly TextSection[] = [
  {
    id: "purpose",
    title: "Our Purpose",
    items: [
      "Our purpose is to strengthen the wellbeing of Hazara community and families by providing culturally informed support, connection, and guidance. We aim to reduce isolation, improve access to services, and support families to navigate life in Australia with confidence and dignity.",
    ],
  },
  {
    id: "vision",
    title: "Our Vision",
    items: [
      "We envision a community where Hazara families feel safe, respected, and empowered—where children grow up supported, and families are connected to one another and to the wider Australian community. We also envision a future in which the Hazara community is recognised for its distinct cultural heritage and history, rather than being defined under identities or names that carry trauma for many Hazara people.",
    ],
  },
  {
    id: "what-we-do",
    title: "What We Do",
    items: [
      "Hazara Shamama Association delivers and supports initiatives including community gatherings, women-focused programs, family support activities, information sessions, and referrals to trusted local services.",
    ],
  },
  {
    id: "governance",
    title: "Governance and Business Structure",
    items: [
      `${ORG_PROFILE.orgName} is a Pty Ltd with an ABN registered for GST. ABN: ${ORG_PROFILE.abn}.`,
    ],
  },
] as const;

export const ABOUT_VALUES: ValuesSection = {
  id: "values",
  title: "Our Values",
  icon: "check",
  items: [
    "Responding to community need with empathy and respect.",
    "Honouring the lived experiences of individuals and families.",
    "Creating spaces where people feel understood and respected.",
  ],
} as const;
