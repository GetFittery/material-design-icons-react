import * as React from "react";
import type { SVGProps } from "react";
const SvgFastRewind = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M9 14.14V9.86L5.97 12zm9 0V9.86L14.97 12z" opacity={0.3} />
    <path d="m11 6-8.5 6 8.5 6zm-2 8.14L5.97 12 9 9.86zM20 6l-8.5 6 8.5 6zm-2 8.14L14.97 12 18 9.86z" />
  </svg>
);
export default SvgFastRewind;
