import * as React from "react";
import type { SVGProps } from "react";
const SvgWork = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-120v-600h240v-160h320v160h240v600zm60-60h680v-480H140zm240-540h200v-100H380zM140-180v-480z" />
  </svg>
);
export default SvgWork;
