export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export type DayHours =
  | { closed: true }
  | { closed: false; open: string; close: string }; // "09:00", "17:30"

export type OpeningHours = Record<DayKey, DayHours>;

export const OPENING_HOURS: OpeningHours = {
  mon: { closed: false, open: "09:00", close: "17:00" },
  tue: { closed: false, open: "09:00", close: "17:00" },
  wed: { closed: false, open: "09:00", close: "17:00" },
  thu: { closed: false, open: "09:00", close: "17:00" },
  fri: { closed: false, open: "09:00", close: "17:00" },
  sat: { closed: true },
  sun: { closed: true },
};
