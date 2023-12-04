import * as React from "react";
import type { SVGProps } from "react";
const SvgFilePresent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18zm0-60h520v-494H554v-186H220zm260.264-80Q539-220 579.5-261.125 620-302.25 620-360v-140h-40v140q0 42-28.75 71T480-260q-42 0-71-29t-29-71v-220q0-18 11.5-29t28.5-11q18 0 29 11t11 29v200h40v-200q0-33.6-23.077-56.8-23.078-23.2-56.5-23.2Q387-660 363.5-636.8T340-580v220q0 57.75 41.203 98.875Q422.405-220 480.264-220M220-820v186zv680z" />
  </svg>
);
export default SvgFilePresent;
