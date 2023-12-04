import * as React from "react";
import type { SVGProps } from "react";
const SvgPianoFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-720h720v720zm60-60h157v-210h-50v-390H180zm443 0h157v-600H673v390h-50zm-246 0h206v-210h-50v-390H427v390h-50z" />
  </svg>
);
export default SvgPianoFill;
