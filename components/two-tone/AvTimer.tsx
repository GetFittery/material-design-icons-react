import * as React from "react";
import type { SVGProps } from "react";
const SvgAvTimer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 21a9 9 0 0 0 0-18h-1v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9" />
    <circle cx={12} cy={17} r={1} />
    <circle cx={17} cy={12} r={1} />
    <circle cx={7} cy={12} r={1} />
  </svg>
);
export default SvgAvTimer;