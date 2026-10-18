import { PRESETS, sessionLength } from "../src/lib/intervals";

describe("sessionLength", () => {
  it("leaves out the rest after the last round", () => {
    const tabata = PRESETS.find((p) => p.label === "Tabata")!;
    expect(sessionLength(tabata)).toBe(8 * 20_000 + 7 * 10_000);
  });

  it("is zero without rounds", () => {
    expect(sessionLength({ label: "none", workMs: 1_000, restMs: 1_000, rounds: 0 })).toBe(0);
  });
});
