import * as React from "react";
import type { SVGProps } from "react";
const SvgCropFree = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 19c0 1.1.9 2 2 2h4v-2H5v-4H3zM21 5c0-1.1-.9-2-2-2h-4v2h4v4h2zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2zm16 14v-4h-2v4h-4v2h4c1.1 0 2-.9 2-2" />
  </svg>
);
export default SvgCropFree;