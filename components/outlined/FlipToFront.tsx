import * as React from "react";
import type { SVGProps } from "react";
const SvgFlipToFront = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 13h2v-2H3zm0 4h2v-2H3zm2 4v-2H3a2 2 0 0 0 2 2M3 9h2V7H3zm12 12h2v-2h-2zm4-18H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 12H9V5h10zm-8 6h2v-2h-2zm-4 0h2v-2H7z" />
  </svg>
);
export default SvgFlipToFront;
