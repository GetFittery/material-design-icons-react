import * as React from "react";
import type { SVGProps } from "react";
const SvgChips = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M277-452h406q12 0 21-9t9-21q0-12-9-21t-21-9H277q-12 0-21 9t-9 21q0 12 9 21t21 9m-97 332q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" />
  </svg>
);
export default SvgChips;
