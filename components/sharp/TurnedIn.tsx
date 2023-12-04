import * as React from "react";
import type { SVGProps } from "react";
const SvgTurnedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19 3H5v18l7-3 7 3z" />
  </svg>
);
export default SvgTurnedIn;
