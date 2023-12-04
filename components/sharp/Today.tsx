import * as React from "react";
import type { SVGProps } from "react";
const SvgToday = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 3h-3V1h-2v2H8V1H6v2H3v18h18zm-2 16H5V8h14zM7 10h5v5H7z" />
  </svg>
);
export default SvgToday;
