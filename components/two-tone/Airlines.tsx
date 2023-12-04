import * as React from "react";
import type { SVGProps } from "react";
const SvgAirlines = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      d="M14.05 6 5.8 18h11.54l2.25-12zm.45 8a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5"
      opacity={0.3}
    />
    <path d="M17.34 18H5.8l8.25-12h5.54zM13 4 2 20h17l3-16zm1.5 5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5" />
  </svg>
);
export default SvgAirlines;
