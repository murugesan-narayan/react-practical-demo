import React from "react";
import { css } from "@emotion/core";
import {
  BeatLoader,
  BounceLoader,
  ClockLoader,
  RingLoader,
} from "react-spinners";

const loaderCSS = css`
  margin-top: 25px;
  margin-bottom: 25px;
`;

function ReactSpinnersDemo() {
  return (
    <div>
      BounceLoader:{" "}
      <BounceLoader css={loaderCSS} size={25} color="blue" loading />
      <br />
      ClockLoader:{" "}
      <ClockLoader css={loaderCSS} size={35} color="yellow" loading />
      <br />
      <br />
      BeatLoader: <BeatLoader css={loaderCSS} color="green" loading />
      <br />
      RingLoader: <RingLoader color="orange" loading />
    </div>
  );
}

export default ReactSpinnersDemo;
