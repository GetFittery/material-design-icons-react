import * as React from "react";
import type { SVGProps } from "react";
const SvgPending = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8" />
    <circle cx={7} cy={12} r={1.5} />
    <circle cx={12} cy={12} r={1.5} />
    <circle cx={17} cy={12} r={1.5} />
  </svg>
);
export default SvgPending;