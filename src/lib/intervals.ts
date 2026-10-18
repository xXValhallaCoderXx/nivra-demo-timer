export interface Interval {
  label: string;
  workMs: number;
  restMs: number;
  rounds: number;
}

export const PRESETS: readonly Interval[] = [
  { label: "Tabata", workMs: 20_000, restMs: 10_000, rounds: 8 },
  { label: "EMOM", workMs: 60_000, restMs: 0, rounds: 10 },
  { label: "Long rounds", workMs: 180_000, restMs: 60_000, rounds: 5 },
];

/** The total length of an interval session, rest after the last round excluded. */
export function sessionLength(interval: Interval): number {
  if (interval.rounds <= 0) return 0;
  return interval.rounds * interval.workMs + (interval.rounds - 1) * interval.restMs;
}
