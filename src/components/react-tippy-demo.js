import Tippy from "@tippy.js/react";
import React, { forwardRef } from "react";
import "tippy.js/dist/tippy.css";

const CustToolTip = () => {
  return <span style={{ color: "yellow" }}>Func tooltip content</span>;
};

const ChildElementTest = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <p style={{ border: "2px dotted", width: "155px" }}>My Child Div</p>
    </div>
  );
});

function ReactTippyDemo() {
  return (
    <div>
      <Tippy content="My tooltip content">
        <button>Hover</button>
      </Tippy>
      <br />
      <Tippy
        content={<span style={{ color: "blue" }}>Inline tooltip content</span>}
      >
        <button>Hover</button>
      </Tippy>
      <br />
      <Tippy content={<CustToolTip />}>
        <button>Hover</button>
      </Tippy>
      <br />
      <Tippy content={<CustToolTip />} placement="bottom-start">
        <ChildElementTest />
      </Tippy>
      <Tippy content={<CustToolTip />} arrow={false}>
        <button>Hover without Arrow</button>
      </Tippy>
      <br />
      <Tippy content={<CustToolTip />} delay={500}>
        {/* 0.5 secs delay for tooltip to show*/}
        <button>Hover Delay</button>
      </Tippy>
      <br />
      <Tippy content={<CustToolTip />} placement="right">
        {/* 0.5 secs delay for tooltip to show*/}
        <button>Hover Placement</button>
      </Tippy>
    </div>
  );
}

export default ReactTippyDemo;
