import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CirculerProgress from "./page";

describe("CirculerProgress Component", () => {
  it("renders without crashing", () => {
    render(<CirculerProgress />);
    expect(screen.getByText("Intellect")).toBeDefined();
  });

  it("renders CircularGauge, ProgressSlider, and BarProgress", () => {
    render(<CirculerProgress />);

    // Checking if the circular gauge is present
    expect(screen.getAllByRole("meter")[0]).toBeDefined(); // The Gauge component uses an SVG

    // Checking if the slider is present
    expect(screen.getAllByRole("slider")[0]).toBeDefined();

    // Checking if the bar progress is present
    expect(screen.getAllByText("Low")[0]).toBeDefined(); // Initial state label
  });
});
