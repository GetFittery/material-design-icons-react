import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandingWatermark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 19h18V5H3zm8-7h9v6h-9z" opacity={0.3} />
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18zm-10-7h9v6h-9z" />
  </svg>
);
export default SvgBrandingWatermark;
