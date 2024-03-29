import * as React from "react";
import type { SVGProps } from "react";
const SvgSplitscreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M220-570h520v-250H220zm0 60q-24 0-42-18t-18-42v-250q0-24 18-42t42-18h520q24 0 42 18t18 42v250q0 24-18 42t-42 18zm0 370h520v-250H220zm0 60q-24 0-42-18t-18-42v-250q0-24 18-42t42-18h520q24 0 42 18t18 42v250q0 24-18 42t-42 18zm0-490v-250zm0 430v-250z" />
  </svg>
);
export default SvgSplitscreen;
