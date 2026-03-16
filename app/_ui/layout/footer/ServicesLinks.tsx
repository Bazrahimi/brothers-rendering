import { SERVICES_LINKS } from "@/app/_lib/routes/publicRoutes";
import Link from "next/link";
import { Header } from "../../typography/Header";
import { CN } from "./Footer";

const ServiceLink = () => {
  return (
    <div>
      <Header as="h4" size="sm" align="left">
        Services Links
      </Header>
          <ul className={CN.list}>
        {SERVICES_LINKS.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={CN.link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceLink;
