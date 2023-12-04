import * as React from "react";
import type { SVGProps } from "react";
const SvgViewCarousel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M9 7h6v10H9z" opacity={0.3} />
    <path d="M2 7h4v10H2zm5 12h10V5H7zM9 7h6v10H9zm9 0h4v10h-4z" />
  </svg>
);
export default SvgViewCarousel;
