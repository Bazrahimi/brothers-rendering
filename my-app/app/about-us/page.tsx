import {
  ABOUT_INTRODUCTION,
  ABOUT_SECTIONS,
  ABOUT_VALUES,
  ABOUT_TEAM
} from "@/app/_lib/org/orgPages/aboutUs";

import AboutIntroduction from "./_ui/AboutIntroduction";
import AboutTextSections from "./_ui/AboutTextSections";
import AboutValues from "./_ui/AboutValues";
import { TeamGrid } from "./_ui/TeamGrid";
import MultiLanguageCapacity from "../_ui/MultiLanguageCapacity";

export default function AboutUsPage() {
  return (
    <main className="my-5 md:my-10 space-y-5 md:space-y-10">
      <AboutIntroduction section={ABOUT_INTRODUCTION} />
      <AboutTextSections sections={ABOUT_SECTIONS} />
      <AboutValues section={ABOUT_VALUES} />
      <TeamGrid team={ABOUT_TEAM} />
      <MultiLanguageCapacity />
    </main>
  );
}
