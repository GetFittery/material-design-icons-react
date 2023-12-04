import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationChip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M360-509.529Q360-453 398-411q38 42 82 78 44-36 82-78.187t38-98.745Q600-560 564.891-595q-35.108-35-85-35Q430-630 395-594.785q-35 35.214-35 85.256M480-480q-17 0-28.5-11.5T440-520q0-17 11.5-28.5T480-560q17 0 28.5 11.5T520-520q0 17-11.5 28.5T480-480M320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760h320q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200zm0-60h320q92 0 156-64t64-156q0-92-64-156t-156-64H320q-92 0-156 64t-64 156q0 92 64 156t156 64m160-220" />
  </svg>
);
export default SvgLocationChip;
