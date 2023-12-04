import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterFrames = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 4h-6l-4-4-4 4H2v18h20zm-2 16H4V6h4.52l3.52-3.5L15.52 6H20zM18 8H6v10h12" />
  </svg>
);
export default SvgFilterFrames;