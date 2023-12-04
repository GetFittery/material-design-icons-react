import * as React from "react";
import type { SVGProps } from "react";
const SvgPriorityHigh = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <circle cx={12} cy={19} r={2} />
    <path d="M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2" />
  </svg>
);
export default SvgPriorityHigh;