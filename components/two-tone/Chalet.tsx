import * as React from "react";
import type { SVGProps } from "react";
const SvgChalet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M13 18h-2v-3H9v3H7v-4.67l3-3 3 3z" opacity={0.3} />
    <path d="M17.5 15 10 7.5 2.5 15l1.41 1.41L5 15.33V20h10v-4.67l1.09 1.09zM13 18h-2v-3H9v3H7v-4.67l3-3 3 3zm9-10.5h-1.19l.75.75-.71.71-1.46-1.46h-.89v.89l1.45 1.45-.71.71-.74-.74V11h-1V9.81l-.75.75-.71-.71 1.45-1.45v-.9h-.89l-1.45 1.45-.71-.71.75-.75H14v-1h1.19l-.75-.75.71-.71 1.45 1.45h.89v-.87l-1.45-1.45.71-.71.75.75V3h1v1.19l.75-.75.71.71-1.46 1.46v.89h.89l1.45-1.45.71.71-.74.74H22z" />
  </svg>
);
export default SvgChalet;
