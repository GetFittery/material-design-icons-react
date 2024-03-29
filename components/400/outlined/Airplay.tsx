import * as React from "react";
import type { SVGProps } from "react";
const SvgAirplay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m273-120 207-206 206 206zM80-260v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24.75-17.625 42.375T820-200H700v-60h120v-520H140v520h119v60H140q-24.75 0-42.375-17.625T80-260m400-230" />
  </svg>
);
export default SvgAirplay;
