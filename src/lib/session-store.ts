export interface Session {
  startedAt: number;
  durationMs: number;
  laps: number[];
}

const sessions: Session[] = [];

export function saveSession(session: Session): void {
  sessions.unshift(session);
}

export function recentSessions(limit = 10): Session[] {
  return sessions.slice(0, limit);
}
