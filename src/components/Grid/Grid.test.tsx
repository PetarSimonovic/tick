import { render, screen, fireEvent } from "@testing-library/react";

import Grid from "./Grid";
import { CellState } from "../../logic/gameOfLife/gameOfLife.types";

describe("Grid component", () => {
  it("renders a grid of the correct size", () => {
    render(<Grid size={3} />);
    // There should be 9 cells in a 3x3 grid
    expect(screen.getAllByRole("cell")).toHaveLength(9);
  });

  it("toggles cell state on click", () => {
    render(<Grid size={2} />);
    const cells = screen.getAllByRole("cell");
    // Click the first cell
    fireEvent.click(cells[0]);
    // The cell should now have the 'cell__alive' class
    expect(cells[0].className).toMatch(/cell__alive/);

    // Click again to toggle back
    fireEvent.click(cells[0]);
    expect(cells[0].className).toMatch(/cell__dead/);
  });
});
