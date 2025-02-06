import "./styles.css";

// Defining the interface for the BarProgress component props
interface BarProgressProps {
  selectedIndex: number; // Keeps track of the currently selected index
  onSelect: (index: number) => void; // Function to handle the index selection
}

const BarProgress = ({ selectedIndex, onSelect }: BarProgressProps) => {
  // Function to get the label based on the selected index
  const getLabel = () => {
    if (selectedIndex <= 2) return "Low";
    if (selectedIndex === 3) return "Medium";
    return "High";
  };

  // Function to render the SVG filter (used to create a round border on the boxes)
  const SvgFilter = () => {
    return (
      <svg className="flt-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="flt_tag">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="flt_tag"
            />
            <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
          </filter>
        </defs>
      </svg>
    );
  };

  return (
    <div className="bar-progress-container">
      {/* Displaying the label based on the selected index */}
      <div className="bar-progress-label">{getLabel()}</div>

      {/* Box containers with onClick handler to select different indices */}
      <div className="box-parent">
        <div
          className={
            "box box1" + " " + `${selectedIndex >= 5 ? "selected" : ""}`
          }
          role="button"
          onClick={() => onSelect(5)}
        ></div>
        <SvgFilter />
      </div>

      <div className="box-parent">
        <div
          className={
            "box box2" + " " + `${selectedIndex >= 4 ? "selected" : ""}`
          }
          role="button"
          onClick={() => onSelect(4)}
        ></div>
        <SvgFilter />
      </div>

      <div className="box-parent">
        <div
          className={
            "box box3" + " " + `${selectedIndex >= 3 ? "selected" : ""}`
          }
          role="button"
          onClick={() => onSelect(3)}
        ></div>
        <SvgFilter />
      </div>

      <div className="box-parent">
        <div
          className={
            "box box4" + " " + `${selectedIndex >= 2 ? "selected" : ""}`
          }
          role="button"
          onClick={() => onSelect(2)}
        ></div>
        <SvgFilter />
      </div>

      {/* Triangle container */}
      <div className="triangle-container">
        <div
          className={`triangle ${selectedIndex >= 1 ? "selected" : ""}`}
          role="button"
          onClick={() => onSelect(1)}
        ></div>
      </div>
    </div>
  );
};

export default BarProgress;
