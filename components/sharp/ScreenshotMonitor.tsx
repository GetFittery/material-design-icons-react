import * as React from "react";
import type { SVGProps } from "react";
const SvgScreenshotMonitor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 3H2v16h6v2h8v-2h6zm-2 14H4V5h16z" />
    <path d="M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z" />
  </svg>
);
export default SvgScreenshotMonitor;
