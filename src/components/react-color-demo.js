import React, { useState } from "react";
import { ChromePicker } from "react-color";

function ReactColorDemo() {
  const [color, setColor] = useState("#fff");
  const [showColPicker, setShowColPicker] = useState(false);
  return (
    <div>
      <button onClick={() => setShowColPicker((val) => !val)}>
        {showColPicker ? "Close" : "Show"} Color Picker
      </button>
      {showColPicker && (
        <ChromePicker
          color={color}
          onChange={(updated) => setColor(updated.hex)}
        />
      )}
      <h2>You picked {color}</h2>
    </div>
  );
}

export default ReactColorDemo;
