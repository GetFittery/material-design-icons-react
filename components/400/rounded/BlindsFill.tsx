import * as React from "react";
import type { SVGProps } from "react";
const SvgBlindsFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-180v-600q0-24.75 17.625-42.375T220-840h520q24.75 0 42.375 17.625T800-780v600h50q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T850-120H110q-12.75 0-21.375-8.675Q80-137.351 80-150.175 80-163 88.625-171.5T110-180zm60-495h355v-105H220zm0 165h355v-105H220zm0 330h520v-270H635v88q14 8 22 21.5t8 30.5q0 24.857-17.601 42.429Q629.798-250 604.899-250T562.5-267.571Q545-285.143 545-310q0-17 8-30.5t22-21.5v-88H220zm415-495h105v-105H635zm0 165h105v-105H635z" />
  </svg>
);
export default SvgBlindsFill;
