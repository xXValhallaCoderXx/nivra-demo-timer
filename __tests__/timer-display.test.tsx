import { render, screen } from "@testing-library/react-native";
import { TimerDisplay } from "../src/components/timer-display";

describe("TimerDisplay", () => {
  it("formats the elapsed time", () => {
    render(<TimerDisplay elapsedMs={125_000} />);
    expect(screen.getByText("2:05")).toBeTruthy();
  });
});
