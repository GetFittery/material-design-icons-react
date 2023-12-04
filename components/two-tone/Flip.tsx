import * as React from "react";
import type { SVGProps } from "react";
const SvgFlip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19 7h2v2h-2zm0 14c1.1 0 2-.9 2-2h-2zm0-6h2v2h-2zm0-4h2v2h-2zM9 5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4v-2H5V5zm10-2v2h2c0-1.1-.9-2-2-2m-8-2h2v22h-2zm4 2h2v2h-2zm0 16h2v2h-2z" />
  </svg>
);
export default SvgFlip;