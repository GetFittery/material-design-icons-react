import * as React from "react";
import type { SVGProps } from "react";
const SvgViewTimeline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 3H3v18h18zm-9 14H6v-2h6zm3-4H9v-2h6zm3-4h-6V7h6z" />
  </svg>
);
export default SvgViewTimeline;
