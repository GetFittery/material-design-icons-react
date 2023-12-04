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
    <path d="M317-140h326l48-190H269zm0 60q-20 0-36.286-12.541Q264.429-105.082 259-125l-52-205h546l-52 205q-5.429 19.918-21.714 32.459Q663-80 643-80zM180-390h600v-100H180zm301-251q0-87 75-160.5T719-880q-3 81-67 150.5T510-645v95h330v160q0 24.75-17.625 42.375T780-330H180q-24.75 0-42.375-17.625T120-390v-160h330v-95q-78-15-141.5-84.5T241-880q88 5 164 78t76 161" />
  </svg>
);
export default SvgPottedPlant;
