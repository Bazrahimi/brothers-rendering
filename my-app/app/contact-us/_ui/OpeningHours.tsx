import type { DayKey, OpeningHours } from "@/app/_lib/org/orgPages/contactUs";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";

const DAY_LABELS: Record<DayKey, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};

type Props = {
  hours: OpeningHours;
  title?: string;
};

export default function OpeningHours({
  hours,
  title = "Opening hours",
}: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <Header as="h3" size="sm">
        {title}
      </Header>

      <div className="mt-3 space-y-2">
        {(Object.keys(DAY_LABELS) as DayKey[]).map((day) => {
          const h = hours[day];

          return (
            <div key={day} className="flex items-center justify-between gap-4">
              <P className=" text-gray-700" size="sm">{DAY_LABELS[day]}</P>

              <P className=" text-gray-700" size="sm">
                {h.closed ? "Closed" : `${h.open} – ${h.close}`}
              </P>
            </div>
          );
        })}
      </div>
    </div>
  );
}
