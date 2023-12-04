import * as React from "react";
import type { SVGProps } from "react";
const SvgMode = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75z" />
  </svg>
);
export default SvgMode;