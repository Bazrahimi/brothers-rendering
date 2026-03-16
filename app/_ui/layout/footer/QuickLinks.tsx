import { QUICK_LINKS } from "@/app/_lib/routes/publicRoutes";
import Link from "next/link";
import { Header } from "../../typography/Header";
import { CN } from "./Footer";

const QuickLinks = () => {
  return (
    <div>
      <Header as="h4" size="sm" align="left">
        Quick Links
      </Header>
      <ul className={CN.list}>
        {QUICK_LINKS.map((item) => (
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

export default QuickLinks;
