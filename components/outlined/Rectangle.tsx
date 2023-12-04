import * as React from "react";
import type { SVGProps } from "react";
const SvgRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M2 4v16h20V4zm18 14H4V6h16z" />
  </svg>
);
export default SvgRectangle;
