import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M10 8.64v6.72L15.27 12z" opacity={0.3} />
    <path d="m8 19 11-7L8 5zm2-10.36L15.27 12 10 15.36z" />
  </svg>
);
export default SvgPlayArrow;
