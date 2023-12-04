import * as React from "react";
import type { SVGProps } from "react";
const SvgDragHandle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M4 9h16v2H4zm0 4h16v2H4z" />
  </svg>
);
export default SvgDragHandle;
