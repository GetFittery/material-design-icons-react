import * as React from "react";
import type { SVGProps } from "react";
const SvgFastForward = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M15 9.86v4.28L18.03 12zm-9 0v4.28L9.03 12z" opacity={0.3} />
    <path d="m4 18 8.5-6L4 6zm2-8.14L9.03 12 6 14.14zM21.5 12 13 6v12zM15 9.86 18.03 12 15 14.14z" />
  </svg>
);
export default SvgFastForward;