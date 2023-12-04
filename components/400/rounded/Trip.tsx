import * as React from "react";
import type { SVGProps } from "react";
const SvgTrip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-120q-24.75 0-42.375-17.625T80-180v-480q0-24.75 17.625-42.375T140-720h180v-100q0-24.75 17.625-42.375T380-880h200q24.75 0 42.375 17.625T640-820v100h180q24.75 0 42.375 17.625T880-660v480q0 24.75-17.625 42.375T820-120zm240-600h200v-100H380zm-133 60H140v480h107zm407 480v-480H307v480zm60-480v480h106v-480zM480-425" />
  </svg>
);
export default SvgTrip;
