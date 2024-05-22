import ColorPicker from "./ColorPicker";

const ColorWheelContainer = () => {
  return (
    <div className="content">
      <h1 className="title">try color wheel</h1>
      <ColorPicker />
      <div className="swatches">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <button className="btn">Try this Color Wheel</button>
    </div>
  );
};

export default ColorWheelContainer;
