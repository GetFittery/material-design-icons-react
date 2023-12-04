import * as React from "react";
import type { SVGProps } from "react";
const SvgWaterfallChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-160v-280h100v280zm155-240v-160h100v160zm155-200v-160h100v160zm155-80v-120h100v120zm155 520v-640h100v640z" />
  </svg>
);
export default SvgWaterfallChart;
