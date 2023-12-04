import * as React from "react";
import type { SVGProps } from "react";
const SvgAreaChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m534.5-803.348 147.652 117.13h95.696q28.447 0 48.408 19.962 19.962 19.961 19.962 48.408v463.826H114.022v-469.804q0-21.095 18.652-30.559 18.652-9.463 35.804 3.211l110.087 82.565 158.217-221.304q16.914-24.238 46.001-28.413 29.087-4.174 51.717 14.978M182.152-555.456v188.26l141.609 112.848 160-221 294.087 229.804v-372.304H658.043L492.478-750.891l-198 279z" />
  </svg>
);
export default SvgAreaChart;
