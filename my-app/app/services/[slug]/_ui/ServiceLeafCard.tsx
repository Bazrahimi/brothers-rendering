import type { ServiceLeaf } from "@/app/_lib/org/category/definitions";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import ServiceLeafImage from "./ServiceLeafImage";

export const ServiceLeafCard = ({
  leaf,
  level,
}: {
  leaf: ServiceLeaf;
  level: number;
}) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <Header as={level === 0 ? "h2" : "h3"} size="sm">
        {leaf.label}
      </Header>

      {leaf.summary ? (
        <P className="mt-2 text-sm text-slate-600">{leaf.summary}</P>
      ) : null}

      {leaf.imageUrl ? (
        <ServiceLeafImage src={leaf.imageUrl} alt={leaf.label} />
      ) : null}

      {leaf.items.length ? (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-700">
          {leaf.items.map((item) => (
            <li key={item}>
              <P className="text-sm">{item}</P>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
};

export default ServiceLeafCard;
