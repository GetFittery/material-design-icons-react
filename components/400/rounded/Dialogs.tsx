import * as React from "react";
import type { SVGProps } from "react";
const SvgDialogs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M294-264h372q12.75 0 21.375-8.625T696-294v-372q0-12.75-8.625-21.375T666-696H294q-12.75 0-21.375 8.625T264-666v372q0 12.75 8.625 21.375T294-264M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" />
  </svg>
);
export default SvgDialogs;
