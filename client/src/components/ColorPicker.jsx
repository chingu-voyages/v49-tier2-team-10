import React, { useEffect, useRef } from "react";
import iro from "@jaames/iro";

const ColorPicker = () => {
  const colorPickerRef = useRef(null);

  useEffect(() => {
    const colorPicker = iro.ColorPicker(colorPickerRef.current, {
      width: 240,
      color: "#5F3CFF",
    });

    const handleColorChange = (color) => {
      console.log("Color changed:", color.hexString);
    };

    colorPicker.on("color:change", handleColorChange);

    return () => {
      colorPicker.off("color:change", handleColorChange);
    };
  }, []);

  return <div ref={colorPickerRef}></div>;
};

export default ColorPicker;
