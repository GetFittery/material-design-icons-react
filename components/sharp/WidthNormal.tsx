import * as React from "react";
import type { SVGProps } from "react";
const SvgWidthNormal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 4H2v16h20zM4 6h4v12H4zm16 12h-4V6h4z" />
  </svg>
);
export default SvgWidthNormal;
