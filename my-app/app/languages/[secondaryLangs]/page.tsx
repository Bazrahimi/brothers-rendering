
//app/languages/[secondaryLangs]/page.tsx
import PageIntro from "@/app/_ui/layout/PageIntro";
import { SECONDARY_LANGUAGES as sl } from "@/app/_lib/languages/multiculturalStatement";
import { P } from "@/app/_ui/typography/paragraph";

const OtherLanguagePage = async ({
  params,
}: {
  params: Promise<{ secondaryLangs: string }>;
}) => {

  const {secondaryLangs} = await params;
  console.log("secondary langs", secondaryLangs)

  /**TODO: what is the issgue with with 
   * ✓ Starting...
SyntaxError: Invalid regular expression: /^/_next/data/development/languages/[secondaryLangs\.json$/: Unterminated character class
    at new RegExp (<anonymous>)
   *  */ 
  return (
    <main className="my-5 space-y-8">
      <P>{secondaryLangs}</P>
      <PageIntro heading={secondaryLangs}  />
      
    </main>
  )
};

export default OtherLanguagePage;
