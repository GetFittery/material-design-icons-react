import * as React from "react";
import type { SVGProps } from "react";
const SvgExplicit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 3H3v18h18zm-6 6h-4v2h4v2h-4v2h4v2H9V7h6z" />
  </svg>
);
export default SvgExplicit;
