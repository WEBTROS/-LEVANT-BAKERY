import { closures, hours, site } from "./site";

export type OpenState = {
  isOpen: boolean;
  /** Short status for compact spots, e.g. "Open now · until 3 PM". */
  label: string;
  /** 0–6 index of the current local day in the café's time zone. */
  todayIndex: number;
};

const weekday: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

export function formatTime(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const suffix = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m ? `${h12}:${String(m).padStart(2, "0")} ${suffix}` : `${h12} ${suffix}`;
}

/** Wall-clock date/time at the café (America/Chicago), regardless of the visitor's zone. */
function localParts(now: Date) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: site.timeZone,
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(now)
      .map((p) => [p.type, p.value]),
  );
  return {
    day: weekday[parts.weekday as string],
    minutes: Number(parts.hour) * 60 + Number(parts.minute),
    ymd: `${parts.year}-${parts.month}-${parts.day}`,
  };
}

function addDays(ymd: string, n: number) {
  const d = new Date(`${ymd}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

const closureOn = (ymd: string) => closures.find((c) => c.date === ymd);

export function getOpenState(now = new Date()): OpenState {
  const { day, minutes, ymd } = localParts(now);
  const today = hours[day];
  const closedToday = closureOn(ymd);

  if (!closedToday && today.open !== null && today.close !== null) {
    if (minutes >= today.open && minutes < today.close) {
      return { isOpen: true, label: `Open now · until ${formatTime(today.close)}`, todayIndex: day };
    }
    if (minutes < today.open) {
      return { isOpen: false, label: `Opens today at ${formatTime(today.open)}`, todayIndex: day };
    }
  }

  // Find the next day we're open, skipping regular closed days and announced closures.
  for (let i = 1; i <= 14; i++) {
    const d = (day + i) % 7;
    const h = hours[d];
    if (h.open === null || closureOn(addDays(ymd, i))) continue;
    const when = i === 1 ? "tomorrow" : h.day;
    const prefix = closedToday ? closedToday.label : "Closed now";
    return { isOpen: false, label: `${prefix} · opens ${when} ${formatTime(h.open)}`, todayIndex: day };
  }

  return { isOpen: false, label: "Closed", todayIndex: day };
}

/** Announced closures within the next `days` days, for a small notice in the Visit section. */
export function upcomingClosures(now = new Date(), days = 10) {
  const { ymd } = localParts(now);
  const end = addDays(ymd, days);
  return closures.filter((c) => c.date >= ymd && c.date <= end);
}
