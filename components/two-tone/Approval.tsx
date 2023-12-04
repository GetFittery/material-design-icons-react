import * as React from "react";
import type { SVGProps } from "react";
const SvgApproval = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      d="M6 16h12v2H6zm6-12c-1.66 0-3 1.34-3 3l3 4 3-4c0-1.66-1.34-3-3-3"
      opacity={0.3}
    />
    <path d="M12 2C9.24 2 7 4.24 7 7l5 7 5-7c0-2.76-2.24-5-5-5m0 9L9 7c0-1.66 1.34-3 3-3s3 1.34 3 3zm6 3H6c-1.1 0-2 .9-2 2v6h16v-6c0-1.1-.9-2-2-2m0 4H6v-2h12z" />
  </svg>
);
export default SvgApproval;
