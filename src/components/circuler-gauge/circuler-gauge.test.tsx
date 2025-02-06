import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CircularGauge from "./circular-gauge";

describe("CircularGauge Component", () => {
  it("renders without crashing", () => {
    render(<CircularGauge progressValue={5} />);
    expect(screen.getByRole("meter")).toBeDefined(); // Checking if the SVG gauge is rendered
  });
});
