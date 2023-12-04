import * as React from "react";
import type { SVGProps } from "react";
const SvgSecurityUpdateWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M11 7h2v6h-2zm0 8h2v2h-2z" opacity={0.3} />
    <path d="M11 15h2v2h-2zm0-8h2v6h-2z" />
    <path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10z" />
    <path d="M7 21h10v-1H7zM7 3v1h10V3z" opacity={0.3} />
  </svg>
);
export default SvgSecurityUpdateWarning;