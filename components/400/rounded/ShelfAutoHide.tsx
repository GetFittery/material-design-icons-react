import * as React from "react";
import type { SVGProps } from "react";
const SvgShelfAutoHide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600zm300 500q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280m-160 0q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280m320 0q17 0 28.5-11.5T680-320q0-17-11.5-28.5T640-360q-17 0-28.5 11.5T600-320q0 17 11.5 28.5T640-280" />
  </svg>
);
export default SvgShelfAutoHide;
