import * as React from "react";
import type { SVGProps } from "react";
const SvgMonitor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 3H2v15h5l-1 1v2h12v-2l-1-1h5zm-2 13H4V5h16z" />
  </svg>
);
export default SvgMonitor;
