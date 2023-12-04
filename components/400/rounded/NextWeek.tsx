import * as React from "react";
import type { SVGProps } from "react";
const SvgNextWeek = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-120q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h180v-100q0-24 18-42t42-18h200q24 0 42 18t18 42v100h180q24 0 42 18t18 42v480q0 24-18 42t-42 18zm0-60h680v-480H140zm240-540h200v-100H380zM140-180v-480zm376-240L412-316q-6 6-6 14t6 14q6 6 14 6t14-6l111-111q9-9 9-21t-9-21L439-553q-6-6-14-6t-14 6q-6 6-6 14t6 14z" />
  </svg>
);
export default SvgNextWeek;
