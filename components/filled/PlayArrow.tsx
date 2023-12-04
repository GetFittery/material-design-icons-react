import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M8 5v14l11-7z" />
  </svg>
);
export default SvgPlayArrow;
