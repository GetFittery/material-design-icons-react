import * as React from "react";
import type { SVGProps } from "react";
const SvgCreditCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-160v-640h800v640zm60-471h680v-109H140zm0 411h680v-282H140zm0 0v-520z" />
  </svg>
);
export default SvgCreditCard;
