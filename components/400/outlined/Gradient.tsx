import * as React from "react";
import type { SVGProps } from "react";
const SvgGradient = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M437-438v-86h85v86zm-86 86v-86h86v86zm171 0v-86h86v86zm86-86v-86h86v86zm-342 0v-86h85v86zm-86 318q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h600q24.75 0 42.375 17.625T840-780v600q0 24.75-17.625 42.375T780-120zm86-60h85v-86h-85zm171 0h85v-86h-85zm343 0v-86zm-600-86h86v-86h85.333v86h85.334v-86H522v86h86v-86h86v86h86v-86h-86v-86h86v-342H180v342h86v86h-86zm0 86v-600zm600-258v86zM608-266v86h86v-86z" />
  </svg>
);
export default SvgGradient;
