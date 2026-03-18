import {
  ABOUT_INTRODUCTION,
  ABOUT_SECTIONS,
  ABOUT_TEAM,
  ABOUT_VALUES,
} from "@/app/_lib/org/orgPages/aboutUs";
import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
import Section from "@/app/_ui/layout/Section";
import { Header } from "@/app/_ui/typography/Header";
import MultiLanguageCapacity from "@/app/_ui/content/MultiLanguageCapacity";
import { P } from "@/app/_ui/typography/paragraph";
import ContactForm from "../contact-us/_ui/ContactForm";
import ServiceArea from "../contact-us/_ui/ServiceArea";
import { Suspense } from "react";
import PageIntro from "@/app/_ui/layout/PageIntro";
import AboutTextSections from "./_ui/AboutTextSections";
import AboutValues from "./_ui/AboutValues";
import { TeamGrid } from "./_ui/TeamGrid";

import { buildMetadata, SEO_PAGES } from "@/app/_lib/org/layoutAndSeo";

export const metadata = buildMetadata(SEO_PAGES.about());

export default function AboutUsPage() {
  return (
    <main className="space-y-5">
      <Section id={ABOUT_INTRODUCTION.id}>
        <PageIntro
          heading={ABOUT_INTRODUCTION.title}
          subHeading={ABOUT_INTRODUCTION.items}
        />
      </Section>

      <Section>
        <AboutTextSections sections={ABOUT_SECTIONS} />
      </Section>

      <Section>
        <AboutValues section={ABOUT_VALUES} />
      </Section>

      <Section>
        <TeamGrid team={ABOUT_TEAM} />
      </Section>

      <div>
        <ServiceArea />
      </div>

      {op.otherLangKeys.length ? (
        <div className="bg-org-secondary-main/15">
          <MultiLanguageCapacity
            otherLangKeys={op.otherLangKeys}
            orgNameFarsi={op.orgNameFarsi}
          />
        </div>
      ) : null}

      {/* 🔥 Special CTA Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-10 shadow-xl">
        {/* Decorative blur accent */}
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <Header as="h3" size="md" className="text-white">
          Ready to get started?
        </Header>

        <P className=" text-slate-300 " size="sm">
          Contact {op.orgName} today to discuss your project. Our team is ready
          to assist you.
        </P>
        <Suspense fallback={null}>
          <ContactForm showMotion />
        </Suspense>
      </section>
    </main>
  );
}
