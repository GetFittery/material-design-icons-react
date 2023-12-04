import * as React from "react";
import type { SVGProps } from "react";
const SvgPages = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600zm300 399 87 53q8 5 16-1t6-16l-23-98 77-67q8-7 4.5-16T634-536l-101-8-39-93q-3.871-9-13.935-9Q470-646 466-637l-39 93-101 8q-10 1-13.5 10t4.5 16l77 67-23 98q-2 10 6 16t16 1z" />
  </svg>
);
export default SvgPages;
