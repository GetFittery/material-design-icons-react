import * as React from "react";
import type { SVGProps } from "react";
const SvgShop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M4 19h16V8H4zM9 9l7.5 4L9 18z" opacity={0.3} />
    <path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6zm-6-2h4v2h-4zm10 15H4V8h16zM9 9v9l7.5-5z" />
  </svg>
);
export default SvgShop;