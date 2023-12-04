import * as React from "react";
import type { SVGProps } from "react";
const SvgNorth = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7z" />
  </svg>
);
export default SvgNorth;
