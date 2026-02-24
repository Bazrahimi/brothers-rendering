import { P } from "../../typography/paragraph";
type Props = {
  label: string;
  value: string;
};
const TrustPill = ({ label, value }: Props) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
      <P className="text-slate-500">{label}</P>
      <P className="mt-1 text-slate-900 line-clamp-1">{value}</P>
    </div>
  );
};

export default TrustPill;
