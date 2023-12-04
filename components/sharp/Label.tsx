import * as React from "react";
import type { SVGProps } from "react";
const SvgLabel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M17.03 5 3 5.01v13.98l14.03.01L22 12z" />
  </svg>
);
export default SvgLabel;
