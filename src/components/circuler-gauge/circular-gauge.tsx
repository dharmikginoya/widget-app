import { Gauge, gaugeClasses } from "@mui/x-charts";

import "./styles.css";

interface CircularGaugeProps {
  progressValue: number; // Keeps track of progres value
}

const CircularGauge = ({ progressValue }: CircularGaugeProps) => {
  return (
    <div className="circuler-progress-container">
      {/* Render Gauge with dashed border */}
      <div className="outer-circule-dashed">
        <Gauge
          width={250}
          height={250}
          value={progressValue}
          valueMax={10}
          valueMin={0}
          cornerRadius={50}
          innerRadius={105}
          sx={{
            [`& .${gaugeClasses.valueText}`]: { fontSize: 40 }, // Label Font Size
            [`& .${gaugeClasses.valueText} text`]: { fill: "#fff" }, // Coloer  for label
          }}
        />
      </div>
    </div>
  );
};

export default CircularGauge;
