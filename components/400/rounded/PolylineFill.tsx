import * as React from "react";
import type { SVGProps } from "react";
const SvgPolylineFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M620-140v-35L310-330H180q-24.75 0-42.375-17.625T120-390v-100q0-24.75 17.625-42.375T180-550h115l125-139.5V-820q0-24.75 17.625-42.375T480-880h100q24.75 0 42.375 17.625T640-820v100q0 24.75-17.625 42.375T580-660H474L340-510v129l280 139q1-24 18.5-41t41.5-17h100q24.75 0 42.375 17.625T840-240v100q0 24.75-17.625 42.375T780-80H680q-24.75 0-42.375-17.625T620-140" />
  </svg>
);
export default SvgPolylineFill;
