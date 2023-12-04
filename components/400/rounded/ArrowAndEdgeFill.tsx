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
    <path d="M450-235v-225q0-24.75-17.625-42.375T390-520H100q-24.75 0-42.375-17.625T40-580v-230q0-12.75 8.675-21.375Q57.351-840 70.175-840 83-840 91.5-831.375T100-810v230h290q26.816 0 49.908 11Q463-558 480-539q17-19 40.092-30T570-580h290v-230q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T920-810v230q0 24.75-17.625 42.375T860-520H570q-24.75 0-42.375 17.625T510-460v225l53-52q9-8 21-8.5t21 8.109q9 9.391 9 21.491t-9 20.9L501-141q-9 9-21 9t-21-9L355-245q-9-9-9-21t9-21q9-9 21.5-9t21.5 9z" />
  </svg>
);
export default SvgArrowAndEdgeFill;
