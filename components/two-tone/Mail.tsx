import * as React from "react";
import type { SVGProps } from "react";
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M20 6H4l8 4.99zM4 8v10h16V8l-8 5z" opacity={0.3} />
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 2-8 4.99L4 6zm0 12H4V8l8 5 8-5z" />
  </svg>
);
export default SvgMail;
