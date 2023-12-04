import * as React from "react";
import type { SVGProps } from "react";
const SvgViewWeek = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-220h187v-520H140zm247 0h186v-520H387zm246 0h187v-520H633zm247 60H80v-640h800z" />
  </svg>
);
export default SvgViewWeek;
