import * as React from "react";
import type { SVGProps } from "react";
const SvgViewArray = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 5h-3v14h3zm-4 0H7v14h10zM6 5H3v14h3z" />
  </svg>
);
export default SvgViewArray;
