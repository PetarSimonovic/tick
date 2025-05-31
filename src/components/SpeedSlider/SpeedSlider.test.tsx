import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import SpeedSlider from "./SpeedSlider";

describe("SpeedSlider", () => {
  const handleSpeedUpdate = jest.fn();

  beforeEach(() => {
    handleSpeedUpdate.mockClear();
  });
  it("renders correctly", () => {
    const { getByRole } = render(
      <SpeedSlider speed={50} updateSpeed={() => {}} />
    );
    expect(getByRole("slider")).toBeInTheDocument();
  });

  it("calls onChange when the slider value changes", async () => {
    const { getByRole } = render(
      <SpeedSlider speed={50} updateSpeed={handleSpeedUpdate} />
    );
    const slider = getByRole("slider");
    fireEvent.change(slider, { target: { value: "75" } });
    expect(handleSpeedUpdate).toHaveBeenCalled();
  });
});
