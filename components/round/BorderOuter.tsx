import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderOuter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M13 7h-2v2h2zm0 4h-2v2h2zm4 0h-2v2h2zM3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m15 14H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1m-5-4h-2v2h2zm-4-4H7v2h2z" />
  </svg>
);
export default SvgBorderOuter;
