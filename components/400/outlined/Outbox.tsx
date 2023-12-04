import * as React from "react";
import type { SVGProps } from "react";
const SvgOutbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M453-422v-189l-79 79-43-43 152-152 152 152-43 43-79-79v189zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-136H634q-26 40-67.5 61.5T480-233q-45 0-86.5-21.5T326-316H180zm300.246-113Q521-293 554-316.5q33-23.5 56-59.5h170v-404H180v404h170q23 36 56.246 59.5 33.247 23.5 74 23.5M180-180h600z" />
  </svg>
);
export default SvgOutbox;