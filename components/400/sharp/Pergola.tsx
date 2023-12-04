import * as React from "react";
import type { SVGProps } from "react";
const SvgPergola = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-760h60v80h600v-80h60v760h-60v-460H180v460zm60-520h600v-100H180zm270 520v-130H330v-60h300v60H510v130zM180-640v-100z" />
  </svg>
);
export default SvgPergola;
