import * as React from "react";
import type { SVGProps } from "react";
const SvgCallLog = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M500-820v-60h380v60zm0 140v-60h380v60zm0 140v-60h380v60zM755-80q-116 0-236.5-56T295-295Q192-398 136-518.5T80-755q0-19.286 12.857-32.143T125-800h140q14 0 24 10t14 25l26.929 125.641Q332-625 329.5-613.5q-2.5 11.5-10.729 19.726L219-493q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.151-15T646-329l119 26q15 4 25 16.044T800-260v135q0 19.286-12.857 32.143T755-80M189-548l81-82-23-110H140q2 42 13.5 88.5T189-548m369 363q41 19 89 31t93 14v-107l-103-21zm0 0" />
  </svg>
);
export default SvgCallLog;
