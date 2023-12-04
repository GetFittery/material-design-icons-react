import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartDisplay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M4 18.01h16V5.99H4zM9.5 7.5l7 4.5-7 4.5z" opacity={0.3} />
    <path d="M9.5 7.5v9l7-4.5z" />
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14.01H4V5.99h16z" />
  </svg>
);
export default SvgSmartDisplay;
