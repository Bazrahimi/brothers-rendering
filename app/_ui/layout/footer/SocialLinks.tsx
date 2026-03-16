import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Header } from "../../typography/Header";
import { CN } from "./Footer";
import { SOCIAL_MEDIA } from "@/app/_lib/org/orgPages/contactUs";

const SOCIAL_META = {
  facebook: {
    label: "Facebook",
    aria: "Open Facebook (opens in new tab)",
    Icon: FaFacebook,
    iconClass: "text-blue-600",
  },
  instagram: {
    label: "Instagram",
    aria: "Open Instagram (opens in new tab)",
    Icon: FaInstagram,
    iconClass: "text-pink-600",
  },
  tiktok: {
    label: "TikTok",
    aria: "Open TikTok (opens in new tab)",
    Icon: FaTiktok,
    iconClass: "text-black",
  },
} as const;

const SocialLinks = () => {
  const entries = Object.entries(SOCIAL_MEDIA).filter(
    ([, href]) => typeof href === "string" && href.length > 0,
  );

  if (entries.length === 0) return null;

  return (
    <div>
      <Header as="h4" size="sm" align="left">
        Follow us
      </Header>

      <ul className={CN.list}>
        {entries.map(([key, href]) => {
          const meta = SOCIAL_META[key as keyof typeof SOCIAL_META];
          if (!meta) return null;

          const { Icon, label, aria, iconClass } = meta;

          return (
            <li key={key}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={CN.socialLink}
                aria-label={aria}
              >
                <Icon className={iconClass} aria-hidden="true" /> {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
