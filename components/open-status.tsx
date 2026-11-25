"use client";

import { useMemo, useSyncExternalStore } from "react";
import { formatTime, getOpenState, upcomingClosures } from "@/lib/hours";
import { hours } from "@/lib/site";

// A minute-resolution clock shared by every status widget. The server snapshot is null,
// so the static HTML shows neutral fallbacks and the live state appears after hydration.
const subscribe = (notify: () => void) => {
  const id = window.setInterval(notify, 30_000);
  return () => window.clearInterval(id);
};
const getMinute = () => Math.floor(Date.now() / 60_000);
const getServerMinute = () => null;

function useMinute() {
  return useSyncExternalStore(subscribe, getMinute, getServerMinute);
}

/** Live open/closed state in the café's own time zone (America/Chicago). */
export function useOpenState() {
  const minute = useMinute();
  return useMemo(() => (minute === null ? null : getOpenState(new Date(minute * 60_000))), [minute]);
}

export function OpenStatus({ fallback, className }: { fallback: string; className?: string }) {
  const state = useOpenState();
  return (
    <span className={className} aria-live="polite">
      <span
        aria-hidden
        className={`mr-2.5 inline-block size-1.5 -translate-y-px rounded-full align-middle transition-colors ${
          state ? (state.isOpen ? "bg-[#8fbf8a]" : "bg-[#d39a7c]") : "bg-current opacity-40"
        }`}
      />
      {state ? state.label : fallback}
    </span>
  );
}

export function ClosureNotice({ className }: { className?: string }) {
  const minute = useMinute();
  const list = minute === null ? [] : upcomingClosures(new Date(minute * 60_000));
  if (!list.length) return null;
  return (
    <p className={className}>
      {list
        .map((c) =>
          `${c.label} — ${new Date(`${c.date}T12:00:00Z`).toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          })}`,
        )
        .join(" · ")}
    </p>
  );
}

/** Weekly hours, Monday-first, with today's row emphasised once we know the café's local day. */
export function HoursList({ className }: { className?: string }) {
  const state = useOpenState();
  const order = [1, 2, 3, 4, 5, 6, 0];
  return (
    <dl className={className}>
      {order.map((i) => {
        const h = hours[i];
        const isToday = state?.todayIndex === i;
        return (
          <div
            key={h.day}
            className={`flex items-baseline justify-between border-b border-line py-3 text-[0.95rem] transition-colors ${
              isToday ? "text-ink" : "text-muted"
            }`}
          >
            <dt className={isToday ? "font-medium" : undefined}>
              {h.day}
              {isToday && <span className="ml-3 eyebrow text-[0.6rem] text-brass">Today</span>}
            </dt>
            <dd className={`tabular-nums ${isToday ? "font-medium" : ""}`}>
              {h.open === null || h.close === null ? "Closed" : `${formatTime(h.open)} – ${formatTime(h.close)}`}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
