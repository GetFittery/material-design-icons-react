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
    <path d="M220-570h520v-250H220zm-60 60v-370h640v370zm60 370h520v-250H220zm-60 60v-370h640v370zm60-490v-250zm0 430v-250z" />
  </svg>
);
export default SvgSplitscreen;
