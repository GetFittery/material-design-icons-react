import * as React from "react";
import type { SVGProps } from "react";
const SvgReportOff = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M9.1 5h5.8L19 9.1v5.8l-.22.22 1.42 1.41.8-.8V8.27L15.73 3H8.27l-.8.8 1.41 1.42z" />
    <circle cx={12} cy={16} r={1} />
    <path d="M13 9.33V7h-2v.33zM2.41 1.58 1 2.99l3.64 3.64L3 8.27v7.46L8.27 21h7.46l1.64-1.64L21.01 23l1.41-1.41zM14.9 19H9.1L5 14.9V9.1l1.05-1.05 9.9 9.9z" />
  </svg>
);
export default SvgReportOff;
