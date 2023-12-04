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
    <path d="M516-82q-9 1-18 1.5t-18 .5q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 9-.5 18t-1.5 18l-58-18v-18q0-142-99-241t-241-99q-142 0-241 99t-99 241q0 142 99 241t241 99h18zm266-18L650-231l-35 106q-4 11-15 10.5T586-126l-98-327q-2-8 4.5-14.5T507-472l327 98q11 3 11.5 14T835-345l-106 35 132 132q17 17 17 39t-17 39q-17 17-39.5 17T782-100" />
  </svg>
);
export default SvgHighlightMouseCursor;
