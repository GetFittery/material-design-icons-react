import * as React from "react";
import type { SVGProps } from "react";
const SvgStopCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m4 14H8V8h8z" />
  </svg>
);
export default SvgStopCircle;
