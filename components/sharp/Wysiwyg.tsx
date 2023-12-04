import * as React from "react";
import type { SVGProps } from "react";
const SvgWysiwyg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M17 12H7v-2h10zm-4 2H7v2h6zm8 7H3V3h18zM19 7H5v12h14z" />
  </svg>
);
export default SvgWysiwyg;
