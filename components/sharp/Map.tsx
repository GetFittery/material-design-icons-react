import * as React from "react";
import type { SVGProps } from "react";
const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M15 5.1 9 3 3 5.02v16.2l6-2.33 6 2.1 6-2.02V2.77zm0 13.79-6-2.11V5.11l6 2.11z" />
  </svg>
);
export default SvgMap;
