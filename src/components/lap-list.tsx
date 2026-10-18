import { FlatList, StyleSheet, Text } from "react-native";
import { formatDuration } from "../lib/format-duration";
import { colors } from "../theme/colors";

export function LapList({ laps }: { laps: number[] }) {
  return (
    <FlatList
      data={laps}
      keyExtractor={(_, index) => String(index)}
      renderItem={({ item, index }) => <Text style={styles.lap}>{`Lap ${index + 1}  ${formatDuration(item)}`}</Text>}
    />
  );
}

const styles = StyleSheet.create({
  lap: { color: colors.muted, fontSize: 16, paddingVertical: 4, textAlign: "center" },
});
