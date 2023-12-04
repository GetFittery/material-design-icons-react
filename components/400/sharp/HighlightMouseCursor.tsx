import * as React from "react";
import type { SVGProps } from "react";
const SvgHighlightMouseCursor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M516-82.475Q507-81 498-80.5t-18 .5q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 9-.5 18t-1.975 18L820-462v-18q0-142.375-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140h18zM821-60 650-231 600-80 480-480l400 120-151 50 171 171z" />
  </svg>
);
export default SvgHighlightMouseCursor;
