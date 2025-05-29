import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SpeedSlider = ({ speed, updateSpeed }) => {
    return (_jsxs("label", { children: ["Speed: ", speed, " ms", _jsx("input", { type: "range", min: 100, max: 2000, step: 100, value: speed, onChange: (e) => updateSpeed(Number(e.target.value)) })] }));
};
export default SpeedSlider;
