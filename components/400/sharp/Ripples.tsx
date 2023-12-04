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
    <path d="M180-180h600v-371q-21 13-45.137 19T686-526q-66.825 0-114.412-47.588Q524-621.175 524-688q0-24.048 6-47.524Q536-759 549-780H180zm-60 60v-720h720v720zm60-660v600z" />
  </svg>
);
export default SvgRipples;
