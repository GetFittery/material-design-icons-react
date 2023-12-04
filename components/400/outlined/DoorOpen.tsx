import * as React from "react";
import type { SVGProps } from "react";
const SvgDoorOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M440-450q13 0 21.5-9t8.5-21q0-13-8.5-21.5T440-510q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9M260-120v-60l280-49v-466q0-14-7.5-24.5T512-732l-252-39v-59l266 46q32 5 53 30.5t21 57.5v516zm-140 0v-60h80v-590q0-26 17.5-43t42.5-17h440q26 0 43 17t17 43v590h80v60zm140-60h440v-590H260v-1z" />
  </svg>
);
export default SvgDoorOpen;
