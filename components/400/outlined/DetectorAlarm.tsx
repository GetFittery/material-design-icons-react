import * as React from "react";
import type { SVGProps } from "react";
const SvgDetectorAlarm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M450-120v-200h60v200zm327-115L636-376l42-43 141 142zm-594 0-42-42 141-142 43 43zm-3-545v60h600v-60zm121 120 18 60h322l18-60zm18 120q-19.5 0-35.25-11.625T262-582l-25-78h-57q-24.75 0-42.375-17.625T120-720v-120h720v120q0 25-17.625 42.5T780-660h-57l-30 81q-6.932 17.25-22.338 28.125Q655.257-540 636-540zM180-780v60z" />
  </svg>
);
export default SvgDetectorAlarm;
