import * as React from "react";
import type { SVGProps } from "react";
const SvgTask = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M14 2H4v20h16V8zm-3.06 16L7.4 14.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41zM13 9V3.5L18.5 9z" />
  </svg>
);
export default SvgTask;
