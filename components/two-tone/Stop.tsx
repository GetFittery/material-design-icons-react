import * as React from "react";
import type { SVGProps } from "react";
const SvgStop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M8 8h8v8H8z" opacity={0.3} />
    <path d="M6 18h12V6H6zM8 8h8v8H8z" />
  </svg>
);
export default SvgStop;
