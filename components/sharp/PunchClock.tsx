import * as React from "react";
import type { SVGProps } from "react";
const SvgPunchClock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 6h-3V1H6v5H3v16h18zM8 3h8v3H8zm4 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5" />
    <path d="M12.5 11.5h-1v2.71l1.64 1.64.71-.71-1.35-1.35z" />
  </svg>
);
export default SvgPunchClock;
