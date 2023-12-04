import * as React from "react";
import type { SVGProps } from "react";
const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M10 4H2v16h20V6H12z" />
  </svg>
);
export default SvgFolder;
