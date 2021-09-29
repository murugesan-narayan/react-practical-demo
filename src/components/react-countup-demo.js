import React from "react";
import CountUp, { useCountUp } from "react-countup";

function ReactCountupDemo() {
  const { start, pauseResume, reset, update } = useCountUp({
    duration: 10,
    end: 300,
    startOnMount: false,
    ref: "c1",
  });
  return (
    <div>
      <div id="1">
        <h2>
          Count: <span id="c1">0</span>
        </h2>
        <button onClick={start}>Start</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        <button onClick={() => update(100)}>Update</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div id="2">
        <CountUp end={200} />
        <br />
        <br />
        <CountUp end={200} duration={5} />
        <br />
        <br />
        <CountUp start={100} end={200} duration={5} />
        <br />
        <br />
        <CountUp end={200} duration={5} prefix="$" decimals="2" />
        <br />
        <br />
        <CountUp end={200} duration={5} suffix=" USD" decimals="2" />
      </div>
    </div>
  );
}

export default ReactCountupDemo;
