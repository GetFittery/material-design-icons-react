import * as React from "react";
import type { SVGProps } from "react";
const SvgAutoAwesomeMotion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 12h8v8h-8z" opacity={0.3} />
    <path d="M14 2H4c-1.1 0-2 .9-2 2v10h2V4h10zm6 8h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2m0 10h-8v-8h8z" />
    <path d="M18 6H8c-1.1 0-2 .9-2 2v10h2V8h10z" />
  </svg>
);
export default SvgAutoAwesomeMotion;