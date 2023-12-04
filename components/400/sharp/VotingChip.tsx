import * as React from "react";
import type { SVGProps } from "react";
const SvgVotingChip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760h320q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200zm0-60h320q91.3 0 155.65-64.288Q860-388.576 860-479.788T795.65-635.5Q731.3-700 640-700H320q-91.3 0-155.65 64.288Q100-571.424 100-480.212T164.35-324.5Q228.7-260 320-260m20-110h40v-90h90v-40h-90v-90h-40v90h-90v40h90zm290 0h40v-220H570v40h60zM480-480" />
  </svg>
);
export default SvgVotingChip;
