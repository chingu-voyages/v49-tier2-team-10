import React, { useState } from "react";
import iro from "@jaames/iro";

const ColorDisplay = ({ color }) => {
  const [colorValues, setColorValues] = useState({
    hex: color.hexString,
    rgb: color.rgb,
    hsl: color.hsl,
  });

  const handleInputChange = (e, format) => {
    const { name, value } = e.target;
    let newColor;

    if (format === "hex") {
      newColor = value;
    } else if (format === "rgb") {
      newColor = { ...colorValues.rgb, [name]: parseInt(value) };
    } else if (format === "hsl") {
      newColor = { ...colorValues.hsl, [name]: parseInt(value) };
    }

    setColorValues((prevColor) => {
      const updatedColor = {
        ...prevColor,
        [format]: newColor,
      };

      if (format === "rgb") {
        const rgbString = `rgb(${updatedColor.rgb.r},${updatedColor.rgb.g},${updatedColor.rgb.b})`;
        iro.Color(rgbString).set(updatedColor.rgb);
      } else if (format === "hsl") {
        const hslString = `hsl(${updatedColor.hsl.h},${updatedColor.hsl.s}%,${updatedColor.hsl.l}%)`;
        iro.Color(hslString).set(updatedColor.hsl);
      } else if (format === "hex") {
        iro.Color(updatedColor.hex).set(updatedColor.hex);
      }

      return updatedColor;
    });
  };

  return (
    <div className="color-values">
      <div>
        <label>HEX:</label>
        <input type="text" value={colorValues.hex} onChange={(e) => handleInputChange(e, "hex")} />
      </div>
      <div>
        <label>RGB:</label>
        <input type="number" name="r" value={colorValues.rgb.r} onChange={(e) => handleInputChange(e, "rgb")} />
        <input type="number" name="g" value={colorValues.rgb.g} onChange={(e) => handleInputChange(e, "rgb")} />
        <input type="number" name="b" value={colorValues.rgb.b} onChange={(e) => handleInputChange(e, "rgb")} />
      </div>
      <div>
        <label>HSL:</label>
        <input type="number" name="h" value={colorValues.hsl.h} onChange={(e) => handleInputChange(e, "hsl")} />
        <input type="number" name="s" value={colorValues.hsl.s} onChange={(e) => handleInputChange(e, "hsl")} />
        <input type="number" name="l" value={colorValues.hsl.l} onChange={(e) => handleInputChange(e, "hsl")} />
      </div>
    </div>
  );
};

export default ColorDisplay;
