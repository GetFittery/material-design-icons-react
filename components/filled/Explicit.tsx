import * as React from "react";
import type { SVGProps } from "react";
const SvgExplicit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4 6h-4v2h4v2h-4v2h4v2H9V7h6z" />
  </svg>
);
export default SvgExplicit;
