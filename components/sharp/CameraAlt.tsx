import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <circle cx={12} cy={12} r={3} />
    <path d="M16.83 4 15 2H9L7.17 4H2v16h20V4zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5" />
  </svg>
);
export default SvgCameraAlt;
