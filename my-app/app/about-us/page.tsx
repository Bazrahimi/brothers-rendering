import {
  ABOUT_INTRODUCTION,
  ABOUT_SECTIONS,
  ABOUT_TEAM,
  ABOUT_VALUES,
} from "@/app/_lib/org/orgPages/aboutUs";
import { ORG_PROFILE } from "../_lib/org/profile";
import { cn } from "../_lib/utils/cn";
import { Header } from "../_ui/typography/Header";

import MultiLanguageCapacity from "../_ui/MultiLanguageCapacity";
import ContactForm from "../contact-us/_ui/ContactForm";
import AboutIntroduction from "./_ui/AboutIntroduction";
import AboutTextSections from "./_ui/AboutTextSections";
import AboutValues from "./_ui/AboutValues";
import { TeamGrid } from "./_ui/TeamGrid";

export default function AboutUsPage() {
  return (
    <main className="space-y-5">
      <SectionWrapper>
        <AboutIntroduction section={ABOUT_INTRODUCTION} />
      </SectionWrapper>

      <SectionWrapper>
        <AboutTextSections sections={ABOUT_SECTIONS} />
      </SectionWrapper>

      <SectionWrapper>
        <AboutValues section={ABOUT_VALUES} />
      </SectionWrapper>

      <SectionWrapper>
        <TeamGrid team={ABOUT_TEAM} />
      </SectionWrapper>

      <div className="bg-org-secondary-main/15">
        <MultiLanguageCapacity />
      </div>

      {/* 🔥 Special CTA Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-10 shadow-xl text-white">
        {/* Decorative blur accent */}
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 text-center space-y-4">
          <Header as="h3" size="md" align="center" className="text-white">
            Ready to get started?
          </Header>

          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Contact {ORG_PROFILE.orgName} today to discuss your project. Our
            team is ready to assist you.
          </p>

          <div className="mx-auto max-w-lg">
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const SectionWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "rounded-b-3xl border border-slate-200 bg-gray-50   shadow-sm backdrop-blur p-6 sm:p-8",
        className,
      )}
    >
      {children}
    </section>
  );
};
