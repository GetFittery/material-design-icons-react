import * as React from "react";
import type { SVGProps } from "react";
const SvgTooltip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-69 370.891-234.022H142.152q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-515.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h675.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v515.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265h-228.5zM142.152-302.152h675.696v-515.696H142.152zm0 0v-515.696z" />
  </svg>
);
export default SvgTooltip;