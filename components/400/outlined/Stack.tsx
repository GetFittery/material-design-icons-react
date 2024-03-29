import * as React from "react";
import type { SVGProps } from "react";
const SvgStack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M260-380v60H140q-24.75 0-42.375-17.625T80-380v-440q0-24.75 17.625-42.375T140-880h440q24.75 0 42.375 17.625T640-820v120h-60v-120H140v440zM380-80q-24.75 0-42.375-17.625T320-140v-440q0-24.75 17.625-42.375T380-640h440q24.75 0 42.375 17.625T880-580v440q0 24.75-17.625 42.375T820-80zm0-60h440v-440H380zm220-220" />
  </svg>
);
export default SvgStack;
