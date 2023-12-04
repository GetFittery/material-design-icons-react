import * as React from "react";
import type { SVGProps } from "react";
const SvgTabMove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24 0-42-18t-18-42v-152q0-13 8.5-21.5T150-362q13 0 21.5 8.5T180-332v152h600v-543H180v151q0 13-8.5 21.5T150-542q-13 0-21.5-8.5T120-572v-208q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm331-302H150q-13 0-21.5-8.5T120-452q0-13 8.5-21.5T150-482h361l-72-73q-8-9-8.5-21t8.5-21q9-9 21-9t21 9l124 124q9 9 9 21.5t-9 21.5L481-306q-9 9-21 8.5t-21-9.5q-9-9-8.5-20.5T439-348z" />
  </svg>
);
export default SvgTabMove;
