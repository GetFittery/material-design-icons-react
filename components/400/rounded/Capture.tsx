import * as React from "react";
import type { SVGProps } from "react";
const SvgCapture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm120-90h440q12.75 0 21.375-8.625T730-340v-280q0-12.75-8.625-21.375T700-650H260q-12.75 0-21.375 8.625T230-620v280q0 12.75 8.625 21.375T260-310m-120 90v-520z" />
  </svg>
);
export default SvgCapture;
