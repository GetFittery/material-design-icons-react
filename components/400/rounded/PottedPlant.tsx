import * as React from "react";
import type { SVGProps } from "react";
const SvgPottedPlant = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M317-140h326l48-190H269zm0 60q-20 0-36.286-12.541Q264.429-105.082 259-125l-52-205h546l-52 205q-5.429 19.918-21.714 32.459Q663-80 643-80zM180-390h600v-100H180zm300-251q5-88 67-150t149-83q4.231-1 7.615-.5Q707-874 710-871t4 6.536q1 3.535 0 7.464-17 79-71 138t-133 73.742V-550h300q12.75 0 21.375 8.625T840-520v130q0 24.75-17.625 42.375T780-330H180q-24.75 0-42.375-17.625T120-390v-130q0-12.75 8.625-21.375T150-550h300v-95q-79-15-133-74t-71-138q-1-3.929 0-7.464 1-3.536 4-6.536 3-3 6.385-4 3.384-1 7.615 0 88 20 150 83t66 151" />
  </svg>
);
export default SvgPottedPlant;
