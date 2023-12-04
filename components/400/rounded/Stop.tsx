import * as React from "react";
import type { SVGProps } from "react";
const SvgStop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M240-300v-360q0-24.75 17.625-42.375T300-720h360q24.75 0 42.375 17.625T720-660v360q0 24.75-17.625 42.375T660-240H300q-24.75 0-42.375-17.625T240-300m60 0h360v-360H300zm180-180" />
  </svg>
);
export default SvgStop;
