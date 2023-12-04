import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraRoll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-80q-24.75 0-42.375-17.625T80-140v-640q0-24.75 17.625-42.375T140-840h60v-40q0-17 11.5-28.5T240-920h160q17 0 28.5 11.5T440-880v40h60q24.75 0 42.375 17.625T560-780v20h320v600H560v20q0 24.75-17.625 42.375T500-80zm0-60h360v-80h320v-480H500v-80H140zm240-140h60v-60h-60zm0-300h60v-60h-60zm160 300h60v-60h-60zm0-300h60v-60h-60zm160 300h60v-60h-60zm0-300h60v-60h-60zM320-460" />
  </svg>
);
export default SvgCameraRoll;
