import React from "react";
import ReactPlayer from "react-player";

function ReactPlayerDemo() {
  return (
    <div>
      <ReactPlayer
        width="355px"
        height="335px"
        controls
        url="https://www.youtube.com/watch?v=hH06eESm5cw"
        onReady={() => console.log("ready to view video")}
        onStart={() => console.log("video started")}
        onPause={() => console.log("video paused")}
        onError={() => console.log("error while viewing video")}
        onEnded={() => console.log("video ended")}
      />
    </div>
  );
}

export default ReactPlayerDemo;
