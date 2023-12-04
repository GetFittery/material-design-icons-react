import * as React from "react";
import type { SVGProps } from "react";
const SvgWorkFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-120v-600h240v-160h320v160h240v600zm300-600h200v-100H380z" />
  </svg>
);
export default SvgWorkFill;
