import * as React from "react";
import type { SVGProps } from "react";
const SvgWysiwyg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M19 19H5V7h14zm-2-7H7v-2h10zm-4 4H7v-2h6z" opacity={0.3} />
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m0 16H5V7h14zm-2-7H7v-2h10zm-4 4H7v-2h6z" />
  </svg>
);
export default SvgWysiwyg;
