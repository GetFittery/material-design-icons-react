import * as React from "react";
import type { SVGProps } from "react";
const SvgFlightClass = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M18 4h-6v9h6zM9.5 16H18v2H8L5 8V4h2v4zM8 19h10v2H8z" />
  </svg>
);
export default SvgFlightClass;
