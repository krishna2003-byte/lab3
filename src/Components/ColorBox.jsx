import { useState } from "react";
import colors from "../data/data";

export default function ColorBox({ initialColor }) {
  const [color, set] = useState(initialColor);

  const change = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    set(randomColor);
  };

  return (
    <div
      onClick={change}
      style={{
        backgroundColor: color,
        width: "50px",
        height: "50px",
      }}
    ></div>
  );
}
