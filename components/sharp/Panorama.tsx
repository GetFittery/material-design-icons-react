import * as React from "react";
import type { SVGProps } from "react";
const SvgPanorama = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M23 20V4H1v16zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5z" />
  </svg>
);
export default SvgPanorama;
