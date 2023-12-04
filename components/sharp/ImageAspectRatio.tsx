import * as React from "react";
import type { SVGProps } from "react";
const SvgImageAspectRatio = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M16 10h-2v2h2zm0 4h-2v2h2zm-8-4H6v2h2zm4 0h-2v2h2zm10-6H2v16h20zm-2 14H4V6h16z" />
  </svg>
);
export default SvgImageAspectRatio;
