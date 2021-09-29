import React from "react";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";

function ReactIconsDemo() {
  return (
    <div>
      <IconContext.Provider value={{ color: "purple", size: "10rem" }}>
        <FaReact />
        <MdAlarm color="blue" />
      </IconContext.Provider>
    </div>
  );
}

export default ReactIconsDemo;
