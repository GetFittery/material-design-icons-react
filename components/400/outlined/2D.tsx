import * as React from "react";
import type { SVGProps } from "react";
const Svg2D = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M263-360h170v-50H313v-53h87q14.025 0 23.513-9.487Q433-481.975 433-496v-70q0-14.45-9.487-24.225Q414.025-600 400-600H263v50h120v54h-87q-14.025 0-23.513 9.487Q263-477.025 263-463zm257 0h160q14 0 23.5-9.487Q713-378.975 713-393v-173q0-14.45-9.487-24.225Q694.025-600 680-600H520zm50-50v-140h93v140zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" />
  </svg>
);
export default Svg2D;
