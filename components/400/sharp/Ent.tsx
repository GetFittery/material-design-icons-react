import * as React from "react";
import type { SVGProps } from "react";
const SvgEnt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M374-80h60l26-250h130v-60H466l11-100h193v-60H422zm-134 0v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l64 255H760v200H600v80h-60v-140h160v-200h114l-45-180q-24-97-105-158.5T480-820q-125 0-212.5 86.5T180-522.46q0 64.417 26.324 122.392Q232.649-342.092 281-297l19 18v199zm257-370" />
  </svg>
);
export default SvgEnt;
