import {
  ABOUT_INTRODUCTION,
  ABOUT_SECTIONS,
  ABOUT_VALUES,
} from "@/app/_lib/org/orgPages/aboutUs";

import AboutIntroduction from "./_ui/AboutIntroduction";
import AboutTextSections from "./_ui/AboutTextSections";
import AboutValues from "./_ui/AboutValues";

export default function AboutUsPage() {
  return (
    <main className="my-5 md:my-10 space-y-5 md:space-y-10">
      <AboutIntroduction section={ABOUT_INTRODUCTION} />
      <AboutTextSections sections={ABOUT_SECTIONS} />
      <AboutValues section={ABOUT_VALUES} />
    </main>
  );
}
