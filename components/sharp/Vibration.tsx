import * as React from "react";
import type { SVGProps } from "react";
const SvgVibration = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M0 15h2V9H0zm3 2h2V7H3zm19-8v6h2V9zm-3 8h2V7h-2zM18 3H6v18h12zm-2 16H8V5h8z" />
  </svg>
);
export default SvgVibration;
