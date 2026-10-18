import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { IntervalPicker } from "../src/components/interval-picker";
import { LapList } from "../src/components/lap-list";
import { StartButton } from "../src/components/start-button";
import { TimerDisplay } from "../src/components/timer-display";
import { useTimer } from "../src/hooks/use-timer";
import { PRESETS } from "../src/lib/intervals";
import { colors } from "../src/theme/colors";

export default function TimerScreen() {
  const timer = useTimer();
  const [preset, setPreset] = useState(PRESETS[0]!);
  return (
    <View style={styles.screen}>
      <IntervalPicker selected={preset} onSelect={setPreset} />
      <TimerDisplay elapsedMs={timer.elapsedMs} />
      <StartButton running={timer.running} onPress={timer.running ? timer.pause : timer.start} />
      <LapList laps={timer.laps} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: colors.background, flex: 1, gap: 16, paddingTop: 64 },
});
