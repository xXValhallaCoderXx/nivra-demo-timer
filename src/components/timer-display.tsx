import { StyleSheet, Text, View } from "react-native";
import { formatDuration } from "../lib/format-duration";
import { colors } from "../theme/colors";

export function TimerDisplay({ elapsedMs }: { elapsedMs: number }) {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="timer" style={styles.digits}>
        {formatDuration(elapsedMs)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", paddingVertical: 24 },
  digits: { color: colors.text, fontSize: 64, fontVariant: ["tabular-nums"] },
});
