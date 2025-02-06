import { Slider } from "@mui/material";

interface ProgressSliderProps {
  progressValue: number;
  onProgressChange: (newValue: number) => void;
}

const ProgressSlider = ({
  progressValue,
  onProgressChange,
}: ProgressSliderProps) => {
  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    onProgressChange(newValue as number);
  };

  return (
    <Slider
      role="slider"
      min={0}
      max={10}
      onChange={handleSliderChange}
      value={progressValue}
    />
  );
};

export default ProgressSlider;
