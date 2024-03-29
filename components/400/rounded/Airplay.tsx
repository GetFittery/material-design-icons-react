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
    <path d="M80-260v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24.75-17.625 42.375T820-200H700v-60h120v-520H140v520h119v60H140q-24.75 0-42.375-17.625T80-260m232 102 147-147q9-9 21-9t21 9l147 147q11 11 5 24.5T632-119H328q-15.429 0-21.214-14Q301-147 312-158m168-332" />
  </svg>
);
export default SvgAirplay;
