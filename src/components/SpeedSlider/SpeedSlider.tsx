type SpeedSliderProps = {
  speed: number;
  updateSpeed: (speed: number) => void;
};

const SpeedSlider = ({ speed, updateSpeed }: SpeedSliderProps) => {
  return (
    <label>
      Speed: {speed} ms
      <input
        type="range"
        min={100}
        max={2000}
        step={100}
        value={speed}
        onChange={(e) => updateSpeed(Number(e.target.value))}
      />
    </label>
  );
};

export default SpeedSlider;
