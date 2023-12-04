import * as React from "react";
import type { SVGProps } from "react";
const SvgTextSnippet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m21 9-6-6H3v18h18zM7 7h7v2H7zm10 10H7v-2h10zm0-4H7v-2h10z" />
  </svg>
);
export default SvgTextSnippet;
