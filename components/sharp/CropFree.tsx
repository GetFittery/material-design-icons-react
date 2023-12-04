import * as React from "react";
import type { SVGProps } from "react";
const SvgCropFree = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 3v6h2V5h4V3zm2 12H3v6h6v-2H5zm14 4h-4v2h6v-6h-2zm2-16h-6v2h4v4h2z" />
  </svg>
);
export default SvgCropFree;