import * as React from "react";
import type { SVGProps } from "react";
const SvgCallMade = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" />
  </svg>
);
export default SvgCallMade;