import * as React from "react";
import type { SVGProps } from "react";
const SvgRipples = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-180h600v-371q-21 13-45.137 19T686-526q-66.825 0-114.412-47.588Q524-621.175 524-688q0-24.048 6-47.524Q536-759 549-780H180zm0 60q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-660v600z" />
  </svg>
);
export default SvgRipples;
