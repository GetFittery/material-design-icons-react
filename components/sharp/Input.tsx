import * as React from "react";
import type { SVGProps } from "react";
const SvgInput = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14a2 2 0 0 0-2-2M11 16l4-4-4-4v3H1v2h10zM23 3.01H1V9h2V4.99h18v14.03H3V15H1v5.99h22zM11 16l4-4-4-4v3H1v2h10z" />
  </svg>
);
export default SvgInput;
