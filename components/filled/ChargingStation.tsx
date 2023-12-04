import * as React from "react";
import type { SVGProps } from "react";
const SvgChargingStation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m14.5 11-3 6v-4h-2l3-6v4zM7 1h10c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2m0 5v12h10V6z" />
  </svg>
);
export default SvgChargingStation;