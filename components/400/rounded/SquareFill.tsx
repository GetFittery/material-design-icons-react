import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-25 0-42.5-17.5T120-180v-600q0-25 17.5-42.5T180-840h600q25 0 42.5 17.5T840-780v600q0 25-17.5 42.5T780-120z" />
  </svg>
);
export default SvgSquareFill;
