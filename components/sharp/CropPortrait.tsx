import * as React from "react";
import type { SVGProps } from "react";
const SvgCropPortrait = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19 3H5v18h14zm-2 16H7V5h10z" />
  </svg>
);
export default SvgCropPortrait;
