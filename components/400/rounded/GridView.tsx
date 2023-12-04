import * as React from "react";
import type { SVGProps } from "react";
const SvgGridView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-510q-24.75 0-42.375-17.625T120-570v-210q0-24.75 17.625-42.375T180-840h210q24.75 0 42.375 17.625T450-780v210q0 24.75-17.625 42.375T390-510zm0 390q-24.75 0-42.375-17.625T120-180v-210q0-24.75 17.625-42.375T180-450h210q24.75 0 42.375 17.625T450-390v210q0 24.75-17.625 42.375T390-120zm390-390q-24.75 0-42.375-17.625T510-570v-210q0-24.75 17.625-42.375T570-840h210q24.75 0 42.375 17.625T840-780v210q0 24.75-17.625 42.375T780-510zm0 390q-24.75 0-42.375-17.625T510-180v-210q0-24.75 17.625-42.375T570-450h210q24.75 0 42.375 17.625T840-390v210q0 24.75-17.625 42.375T780-120zM180-570h210v-210H180zm390 0h210v-210H570zm0 390h210v-210H570zm-390 0h210v-210H180zm210-390" />
  </svg>
);
export default SvgGridView;
