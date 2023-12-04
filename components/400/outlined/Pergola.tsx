import * as React from "react";
import type { SVGProps } from "react";
const SvgPergola = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-730q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T180-850v50h600v-50q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T840-850v730h-60v-460H180v460zm60-520h600v-100H180zm270 520v-130H330v-60h300v60H510v130zM180-640v-100z" />
  </svg>
);
export default SvgPergola;
