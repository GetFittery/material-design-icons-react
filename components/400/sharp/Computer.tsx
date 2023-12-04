import * as React from "react";
import type { SVGProps } from "react";
const SvgComputer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M40-120v-60h880v60zm40-120v-600h800v600zm60-60h680v-480H140zm0 0v-480z" />
  </svg>
);
export default SvgComputer;
