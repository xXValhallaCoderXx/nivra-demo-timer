import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../theme/colors";

interface Props {
  running: boolean;
  onPress: () => void;
}

export function StartButton({ running, onPress }: Props) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={[styles.button, running && styles.running]}>
      <Text style={styles.label}>{running ? "Pause" : "Start"}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: colors.accent, borderRadius: 999, paddingHorizontal: 32, paddingVertical: 14 },
  running: { backgroundColor: colors.warning },
  label: { color: colors.background, fontSize: 18, fontWeight: "700" },
});
