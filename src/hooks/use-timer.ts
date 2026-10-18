import { useCallback, useState } from "react";
import { useInterval } from "./use-interval";

const TICK_MS = 100;

export function useTimer() {
  const [elapsedMs, setElapsedMs] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);

  useInterval(() => setElapsedMs((ms) => ms + TICK_MS), running ? TICK_MS : null);

  const start = useCallback(() => setRunning(true), []);
  const pause = useCallback(() => setRunning(false), []);
  const lap = useCallback(() => setLaps((current) => [...current, elapsedMs]), [elapsedMs]);
  const reset = useCallback(() => {
    setRunning(false);
    setElapsedMs(0);
    setLaps([]);
  }, []);

  return { elapsedMs, running, laps, start, pause, lap, reset };
}
