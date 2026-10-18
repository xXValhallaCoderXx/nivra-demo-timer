import { fireEvent, render, screen } from "@testing-library/react-native";
import { StartButton } from "../src/components/start-button";

describe("StartButton", () => {
  it("says Start, then Pause while running", () => {
    const { rerender } = render(<StartButton running={false} onPress={() => undefined} />);
    expect(screen.getByText("Start")).toBeTruthy();
    rerender(<StartButton running onPress={() => undefined} />);
    expect(screen.getByText("Pause")).toBeTruthy();
  });

  it("calls onPress", () => {
    const onPress = jest.fn();
    render(<StartButton running={false} onPress={onPress} />);
    fireEvent.press(screen.getByRole("button"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
