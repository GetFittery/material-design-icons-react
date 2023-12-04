import * as React from "react";
import type { SVGProps } from "react";
const SvgChargingStation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m14.5 11-3 6v-4h-2l3-6v4zM5 1h14v22H5zm2 5v12h10V6z" />
  </svg>
);
export default SvgChargingStation;
