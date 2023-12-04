import * as React from "react";
import type { SVGProps } from "react";
const SvgNotes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M3 18h12v-2H3zM3 6v2h18V6zm0 7h18v-2H3z" />
  </svg>
);
export default SvgNotes;
