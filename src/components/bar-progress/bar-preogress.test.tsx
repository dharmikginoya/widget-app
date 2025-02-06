import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import BarProgress from "./bar-progress";

describe("BarProgress Component", () => {
  it("renders correctly", () => {
    render(<BarProgress selectedIndex={1} onSelect={() => {}} />);
    expect(screen.getByText("Low")).toBeDefined();
  });

  it("displays 'Medium' when selectedIndex is 3", () => {
    render(<BarProgress selectedIndex={3} onSelect={() => {}} />);
    expect(screen.getByText("Medium")).toBeDefined();
  });

  it("displays 'High' when selectedIndex is 4 or more", () => {
    render(<BarProgress selectedIndex={4} onSelect={() => {}} />);
    expect(screen.getByText("High")).toBeDefined();
  });

  it("applies the 'selected' class correctly", () => {
    render(<BarProgress selectedIndex={1} onSelect={() => {}} />);

    const box1 = screen.getAllByRole("button")[4];
    expect(box1.className).toContain("triangle selected");
  });
});
