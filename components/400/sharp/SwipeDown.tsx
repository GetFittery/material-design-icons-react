import * as React from "react";
import type { SVGProps } from "react";
const SvgSwipeDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M170-389 44-515l28-28 74 73q-8-32-12-64t-4-64q0-77 24.5-149T226-880l29 29q-42 55-63.5 119.5T170-598q0 34 6 67t14 65l78-77 28 28zm125 135 18-68 141-11-127-347 57-22 154 423-128 12 196 91 273-99-106-291 57-22 125 348-351 129zm268-151-68-188 56-20 68 188zm118-43-54-150 56-21 55 151zm3 105" />
  </svg>
);
export default SvgSwipeDown;
