import * as React from "react";
import type { SVGProps } from "react";
const SvgTwoPager = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-160v-640h800v640zm60-60h310v-520H140zm370 0h310v-520H510zm-320-97h210v-60H190zm0-129h210v-60H190zm0-129h210v-60H190zm370 258h210v-60H560zm0-129h210v-60H560zm0-129h210v-60H560zM450-220v-520z" />
  </svg>
);
export default SvgTwoPager;
