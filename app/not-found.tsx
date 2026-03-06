// app/not-found.tsx
import Image from "next/image";
import { HiArrowLeft } from "react-icons/hi";
import { publicAssets } from "./_lib/org/publicAssets";
import { ORG_PROFILE as op } from "./_lib/org/profile";
import { PublicRoutes } from "./_lib/routes/publicRoutes";
import Button from "./_ui/button/Button";
import { Header } from "./_ui/typography/Header";
import { P } from "./_ui/typography/paragraph";

const NotFound = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-org-primary-light/5 px-6 py-16 text-center text-slate-800">
      {/* Logo */}
      <Image
        src={publicAssets.icons.apple}
        alt={`${op.orgName} logo`}
        width={88}
        height={88}
        className="mb-6 rounded-full bg-white p-3 shadow-sm"
        priority
      />

      {/* Status Code */}
      <p className="text-sm font-medium text-org-primary-main">Error 404</p>

      <Header as="h1" className="mt-2">
        Page not found
      </Header>

      <P className="mt-4 max-w-md text-sm text-slate-600">
        We couldn’t find the page.
      </P>

      <P className="mt-2 max-w-md text-sm text-slate-600">
        It may have been moved, removed, or the link may be incorrect.
      </P>

      {/* Actions */}
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <Button
          as="link"
          href={PublicRoutes.home()}
          className="flex items-center gap-2"
        >
          <HiArrowLeft className="text-lg" />
          Back to Home
        </Button>

        <Button as="link" href={PublicRoutes.contact()}>
          Contact Us
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
