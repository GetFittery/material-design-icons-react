import * as React from "react";
import type { SVGProps } from "react";
const SvgWeb = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M22 4H2v16h20zM4 9h10.5v3.5H4zm0 5.5h10.5V18H4zM20 18h-3.5V9H20z" />
  </svg>
);
export default SvgWeb;
