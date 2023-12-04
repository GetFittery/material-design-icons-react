import * as React from "react";
import type { SVGProps } from "react";
const SvgSlideshow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M10 8v8l5-4zm11-5H3v18h18zm-2 16H5V5h14z" />
  </svg>
);
export default SvgSlideshow;
