"use client"; // Enables client-side rendering in Next.js

import { Grid2 } from "@mui/material";
import { useState } from "react";

// Import custom components
import BarProgress from "@/components/bar-progress/bar-progress";
import CircularGauge from "@/components/circuler-gauge/circular-gauge";
import ProgressSlider from "@/components/progress-slider";

import "./globals.css"; // Import global styles

// Main component that combines CircularGauge, ProgressSlider, and BarProgress
export default function CirculerProgress() {
  // State to manage the circular progress value (defaults to 3)
  const [progresValue, setProgresValue] = useState<number>(3);

  // State to manage the selected progress index for BarProgress (defaults to 1)
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  return (
    <>
      {/* Page title */}
      <div>
        <h2>Intellect</h2>
      </div>

      <Grid2 container spacing={8} justifyContent="center">
        {/* Left section - Circular progress and slider */}
        <Grid2>
          {/* Render the circular progress gauge */}
          <CircularGauge progressValue={progresValue} />

          {/* Slider to adjust circular progress */}
          <ProgressSlider
            progressValue={progresValue}
            onProgressChange={setProgresValue} // Updates progress value on change
          />
        </Grid2>

        {/* Right section - Bar-based progress selection */}
        <Grid2>
          <BarProgress
            selectedIndex={selectedIndex} // Current selected index
            onSelect={setSelectedIndex} // Function to update selected index
          />
        </Grid2>
      </Grid2>
    </>
  );
}
