import * as React from "react";
import type { SVGProps } from "react";
const SvgCropSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M20 4H4v16h16zm-2 14H6V6h12z" />
  </svg>
);
export default SvgCropSquare;
