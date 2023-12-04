import * as React from "react";
import type { SVGProps } from "react";
const SvgBlindsClosed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      d="M6 5h8v2H6zm0 4h8v2H6zm10 8h2v2h-2zM6 13h8v2H6zm0 4h8v2H6zm10-4h2v2h-2zm0-8h2v2h-2zm0 4h2v2h-2z"
      opacity={0.3}
    />
    <path d="M20 19V3H4v16H2v2h11.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2zm-6 0H6v-2h8zm0-4H6v-2h8zm0-4H6V9h8zm0-4H6V5h8zm4 12h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V9h2zm0-4h-2V5h2z" />
  </svg>
);
export default SvgBlindsClosed;