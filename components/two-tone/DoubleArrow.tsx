import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M15.5 5H11l5 7-5 7h4.5l5-7z" />
    <path d="M8.5 5H4l5 7-5 7h4.5l5-7z" />
  </svg>
);
export default SvgDoubleArrow;
