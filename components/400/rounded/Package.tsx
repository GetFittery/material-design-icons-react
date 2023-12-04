import * as React from "react";
import type { SVGProps } from "react";
const SvgPackage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m380-548 80-40q9.512-5 19.756-5T500-588l80 40v-232H380zm-60 268q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360h120q17 0 28.5 11.5T480-320q0 17-11.5 28.5T440-280zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-660v600zm0 600h600v-600H640v280q0 17.5-14 26.25t-29 .75l-117-58-117 58q-15 8-29-.75T320-500v-280H180z" />
  </svg>
);
export default SvgPackage;
