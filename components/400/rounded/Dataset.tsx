import * as React from "react";
import type { SVGProps } from "react";
const SvgDataset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M320-290h80q12 0 21-9t9-21v-80q0-12-9-21t-21-9h-80q-12 0-21 9t-9 21v80q0 12 9 21t21 9m240 0h80q12 0 21-9t9-21v-80q0-12-9-21t-21-9h-80q-12 0-21 9t-9 21v80q0 12 9 21t21 9M320-530h80q12.75 0 21.375-8.625T430-560v-80q0-12.75-8.625-21.375T400-670h-80q-12.75 0-21.375 8.625T290-640v80q0 12.75 8.625 21.375T320-530m240 0h80q12.75 0 21.375-8.625T670-560v-80q0-12.75-8.625-21.375T640-670h-80q-12.75 0-21.375 8.625T530-640v80q0 12.75 8.625 21.375T560-530M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" />
  </svg>
);
export default SvgDataset;
