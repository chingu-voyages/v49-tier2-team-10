import React, { useState } from "react";

const ColorWheelContainer = () => {
  const [color, setColor] = useState("#000000");

  const handleSaveColor = async () => {
    const userData = {
      color: color,
      timestamp: new Date().toISOString(),
      // Add more user data here if needed
    };

    try {
      const response = await fetch('http://localhost:3000/api/saveColor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const responseData = await response.json();
      console.log('Data saved successfully:', responseData);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={handleSaveColor}>Save Color</button>
    </div>
  );
};

export default ColorWheelContainer;
