import * as React from "react";
import type { SVGProps } from "react";
const SvgTableRows = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19 5v3H5V5zm0 5v4H5v-4zM5 19v-3h14v3z" opacity={0.3} />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v3H5V5zm0 5v4H5v-4zM5 19v-3h14v3z" />
  </svg>
);
export default SvgTableRows;
