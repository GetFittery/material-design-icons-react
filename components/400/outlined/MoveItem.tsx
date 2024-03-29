import * as React from "react";
import type { SVGProps } from "react";
const SvgMoveItem = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M824-450H323v-60h501l-89-89 43-43 162 162-162 162-43-43zM580-570v-210H180v600h400v-210h60v210q0 24.75-17.625 42.375T580-120H180q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h400q24.75 0 42.375 17.625T640-780v210z" />
  </svg>
);
export default SvgMoveItem;
