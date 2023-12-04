import * as React from "react";
import type { SVGProps } from "react";
const SvgApproval = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M4 14v8h16v-8zm14 4H6v-2h12zM12 2C9.24 2 7 4.24 7 7l5 7 5-7c0-2.76-2.24-5-5-5" />
  </svg>
);
export default SvgApproval;
