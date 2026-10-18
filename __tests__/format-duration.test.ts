import { formatDuration } from "../src/lib/format-duration";

describe("formatDuration", () => {
  it("shows minutes and seconds under an hour", () => {
    expect(formatDuration(65_000)).toBe("1:05");
  });

  it("shows hours from an hour up", () => {
    expect(formatDuration(3_725_000)).toBe("1:02:05");
  });

  it("never goes below zero", () => {
    expect(formatDuration(-5)).toBe("0:00");
  });
});
