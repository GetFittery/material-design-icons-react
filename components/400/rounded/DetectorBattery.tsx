import * as React from "react";
import type { SVGProps } from "react";
const SvgDetectorBattery = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M320-180h400v-160H320zm-110 60q-12 0-21-9t-9-21v-220q0-12.75 9-21.375T210-400h540q12.75 0 21.375 8.625T780-370v60h30.175q12.825 0 21.325 8.625T840-280v40q0 12.75-8.625 21.375T810-210h-30v60q0 12.75-8.625 21.375T750-120zm-30-660v60h600v-60zm121 120 18 60h322l18-60zm18 120q-19.5 0-35.25-11.625T262-582l-25-78h-57q-24.75 0-42.375-17.625T120-720v-120h720v120q0 25-17.625 42.5T780-660h-57l-30 81q-6.932 17.25-22.338 28.125Q655.257-540 636-540zM180-780v60z" />
  </svg>
);
export default SvgDetectorBattery;
