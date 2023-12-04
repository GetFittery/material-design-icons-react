import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckBox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 3H3v18h18zM10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z" />
  </svg>
);
export default SvgCheckBox;
