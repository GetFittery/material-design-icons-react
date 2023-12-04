import * as React from "react";
import type { SVGProps } from "react";
const SvgCallReceived = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M15 17H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z" />
  </svg>
);
export default SvgCallReceived;