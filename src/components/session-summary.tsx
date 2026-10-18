import { StyleSheet, Text, View } from "react-native";
import { formatDuration } from "../lib/format-duration";
import type { Session } from "../lib/session-store";
import { colors } from "../theme/colors";

export function SessionSummary({ session }: { session: Session }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{new Date(session.startedAt).toLocaleString()}</Text>
      <Text style={styles.detail}>{`${formatDuration(session.durationMs)} · ${session.laps.length} laps`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.surface, borderRadius: 12, marginBottom: 8, padding: 12 },
  title: { color: colors.text, fontWeight: "600" },
  detail: { color: colors.muted },
});
