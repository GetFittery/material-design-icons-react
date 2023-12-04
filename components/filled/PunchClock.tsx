import * as React from "react";
import type { SVGProps } from "react";
const SvgPunchClock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19 6h-1V1H6v5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M8 3h8v3H8zm4 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5" />
    <path d="M12.5 11.5h-1v2.71l1.64 1.64.71-.71-1.35-1.35z" />
  </svg>
);
export default SvgPunchClock;