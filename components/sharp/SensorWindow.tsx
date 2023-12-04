import * as React from "react";
import type { SVGProps } from "react";
const SvgSensorWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M18 4v16H6V4zM4 2v20h16V2zm3 17h10v-6H7zm3-9h4v1h3V5H7v6h3z" />
  </svg>
);
export default SvgSensorWindow;
