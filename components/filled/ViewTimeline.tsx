import * as React from "react";
import type { SVGProps } from "react";
const SvgViewTimeline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 14H6v-2h6zm3-4H9v-2h6zm3-4h-6V7h6z" />
  </svg>
);
export default SvgViewTimeline;
