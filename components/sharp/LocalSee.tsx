import * as React from "react";
import type { SVGProps } from "react";
const SvgLocalSee = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <circle cx={12} cy={12} r={3.2} />
    <path d="M22 4h-5.17L15 2H9L7.17 4H2v16h20zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5" />
  </svg>
);
export default SvgLocalSee;