import * as React from "react";
import type { SVGProps } from "react";
const SvgViewWeek = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M7.33 20H2V4h5.33zM22 20V4h-5.33v16zm-7.33 0V4H9.33v16z" />
  </svg>
);
export default SvgViewWeek;
