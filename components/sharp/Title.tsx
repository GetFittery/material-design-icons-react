import * as React from "react";
import type { SVGProps } from "react";
const SvgTitle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M5 4v3h5.5v12h3V7H19V4z" />
  </svg>
);
export default SvgTitle;
