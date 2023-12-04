import * as React from "react";
import type { SVGProps } from "react";
const SvgMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 2H2.01L2 22l4-4h16zm-4 12H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z" />
  </svg>
);
export default SvgMessage;
