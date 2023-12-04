import * as React from "react";
import type { SVGProps } from "react";
const SvgOfflineShare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M6 5H4v18h12v-2H6z" />
    <path d="M20 1H8v18h12zm-2 14h-8V5h8z" />
    <path d="M12.5 10.25h2V12L17 9.5 14.5 7v1.75H11V12h1.5z" />
  </svg>
);
export default SvgOfflineShare;
