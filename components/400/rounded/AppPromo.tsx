import * as React from "react";
import type { SVGProps } from "react";
const SvgAppPromo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M450-476v-174q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-650v174l63-63q9-9 21.1-9 12.1 0 20.9 9 9 9 9 21t-9 21L501-383q-9 9-21 9t-21-9L345-497q-9-9-9-21t9-21q9-9 21-9t21 9zM260-40q-24 0-42-18t-18-42v-760q0-24 18-42t42-18h440q24 0 42 18t18 42v760q0 24-18 42t-42 18zm0-150v90h440v-90zm0-60h440v-520H260zm0-580h440v-30H260zm0 640v90zm0-640v-30zm158.235 705h123.53Q550-125 556-131t6-14q0-8-6-14t-14.235-6h-123.53Q410-165 404-159t-6 14q0 8 6 14t14.235 6" />
  </svg>
);
export default SvgAppPromo;
