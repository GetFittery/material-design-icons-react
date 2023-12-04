import * as React from "react";
import type { SVGProps } from "react";
const SvgStairs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M407-383h73q12.75 0 21.375-8.625T510-413v-103h73q12.75 0 21.375-8.625T613-546v-104h67q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T680-710h-97q-12.75 0-21.375 8.625T553-680v103h-73q-12.75 0-21.375 8.625T450-547v103h-73q-12.75 0-21.375 8.625T347-414v104h-67q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T280-250h97q12.75 0 21.375-8.625T407-280zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" />
  </svg>
);
export default SvgStairs;
