import { act, renderHook } from "@testing-library/react-native";
import { useTimer } from "../src/hooks/use-timer";

jest.useFakeTimers();

describe("useTimer", () => {
  it("counts while running and keeps laps", () => {
    const { result } = renderHook(() => useTimer());
    act(() => result.current.start());
    act(() => jest.advanceTimersByTime(1_000));
    act(() => result.current.lap());
    expect(result.current.elapsedMs).toBe(1_000);
    expect(result.current.laps).toEqual([1_000]);
  });

  it("resets to zero", () => {
    const { result } = renderHook(() => useTimer());
    act(() => result.current.start());
    act(() => jest.advanceTimersByTime(500));
    act(() => result.current.reset());
    expect(result.current.elapsedMs).toBe(0);
    expect(result.current.running).toBe(false);
  });
});
