import * as React from "react";
import type { SVGProps } from "react";
const SvgBottomAppBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-720h720v720zm60-203v143h600v-143H548q-14 14-31.165 22t-37 8Q460-293 443-301t-31-22zm300-30q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9m-300-30h210q0-36 27-63t63-27q36 0 63 27t27 63h210v-397H180zm0 203h600z" />
  </svg>
);
export default SvgBottomAppBar;
