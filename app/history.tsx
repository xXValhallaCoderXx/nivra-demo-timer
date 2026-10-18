import { FlatList, StyleSheet, View } from "react-native";
import { SessionSummary } from "../src/components/session-summary";
import { recentSessions } from "../src/lib/session-store";
import { colors } from "../src/theme/colors";

export default function HistoryScreen() {
  return (
    <View style={styles.screen}>
      <FlatList data={recentSessions()} keyExtractor={(s) => String(s.startedAt)} renderItem={({ item }) => <SessionSummary session={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: colors.background, flex: 1, padding: 16 },
});
