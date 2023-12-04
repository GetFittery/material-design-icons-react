import * as React from "react";
import type { SVGProps } from "react";
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 4H2v16h20zm-2 4-8 5-8-5V6l8 5 8-5z" />
  </svg>
);
export default SvgMail;