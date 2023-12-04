import * as React from "react";
import type { SVGProps } from "react";
const SvgExplicitFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M366-280h227v-60H426v-106h167v-60H426v-107h167v-60H366zM120-120v-720h720v720z" />
  </svg>
);
export default SvgExplicitFill;
