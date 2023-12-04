import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandingWatermark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M23 3H1v18h22zm-2 16h-9v-6h9z" />
  </svg>
);
export default SvgBrandingWatermark;
