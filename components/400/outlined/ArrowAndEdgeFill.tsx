import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowAndEdgeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-120 334-266l42-43 74 74v-225q0-24.75-17.625-42.375T390-520H100q-24.75 0-42.375-17.625T40-580v-260h60v260h290q26.816 0 49.908 11Q463-558 480-539q17-19 40.092-30T570-580h290v-260h60v260q0 24.75-17.625 42.375T860-520H570q-24.75 0-42.375 17.625T510-460v225l74-73 42 42z" />
  </svg>
);
export default SvgArrowAndEdgeFill;
