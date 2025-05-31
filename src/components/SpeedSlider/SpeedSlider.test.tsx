import { render, fireEvent } from "@testing-library/react";
import SpeedSlider from "./SpeedSlider";

const handleClick = jest.fn();

describe("SpeedSlider", () => {
  it("renders correctly", () => {
    const { getByRole } = render(
      <SpeedSlider value={50} onChange={() => {}} />
    );
    expect(getByRole("slider")).toBeInTheDocument();
  });

  it("calls onChange when the slider value changes", () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <SpeedSlider value={50} onChange={handleChange} />
    );
    const slider = getByRole("slider");
    fireEvent.change(slider, { target: { value: "75" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
