import * as React from "react";
import type { SVGProps } from "react";
const SvgPhoto = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 21V3H3v18zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z" />
  </svg>
);
export default SvgPhoto;
