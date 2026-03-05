import { SERVICE_AREA as area, scopeLabel } from "@/app/_lib/org/serviceArea";
import { MdLocationOn } from "react-icons/md";
import { P } from "../../typography/paragraph";
export const HeroServiceBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
      <MdLocationOn aria-hidden="true" className="h-3.5 w-3.5 text-emerald-500" />
      <P>Servicing {scopeLabel(area.scope)}</P>
    </div>
  );
};
