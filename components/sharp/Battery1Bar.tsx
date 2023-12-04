import * as React from "react";
import type { SVGProps } from "react";
const SvgBattery1Bar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M17 4v18H7V4h3V2h4v2zm-2 2H9v12h6z" />
  </svg>
);
export default SvgBattery1Bar;
