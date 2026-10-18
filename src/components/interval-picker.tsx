import { Pressable, StyleSheet, Text, View } from "react-native";
import { PRESETS, type Interval } from "../lib/intervals";
import { colors } from "../theme/colors";

interface Props {
  selected: Interval;
  onSelect: (interval: Interval) => void;
}

export function IntervalPicker({ selected, onSelect }: Props) {
  return (
    <View style={styles.row}>
      {PRESETS.map((preset) => (
        <Pressable key={preset.label} onPress={() => onSelect(preset)} style={[styles.chip, preset.label === selected.label && styles.active]}>
          <Text style={styles.text}>{preset.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 8, justifyContent: "center" },
  chip: { borderColor: colors.muted, borderRadius: 16, borderWidth: 1, paddingHorizontal: 12, paddingVertical: 6 },
  active: { backgroundColor: colors.surface, borderColor: colors.accent },
  text: { color: colors.text },
});
