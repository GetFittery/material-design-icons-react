import * as React from "react";
import type { SVGProps } from "react";
const SvgBurstMode = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      d="M11 17h10V7H11zm3-3.53 1.43 1.72 2-2.58L20 15.99h-8z"
      opacity={0.3}
    />
    <path d="M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1m-1 12H11V7h10zm-3.57-4.38-2 2.57L14 13.47l-2 2.52h8z" />
  </svg>
);
export default SvgBurstMode;