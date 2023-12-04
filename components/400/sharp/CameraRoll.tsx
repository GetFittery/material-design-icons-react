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
    <path d="M80-80v-760h120v-80h240v80h120v80h320v600H560v80zm60-60h360v-80h320v-480H500v-80H140zm240-140h60v-60h-60zm0-300h60v-60h-60zm160 300h60v-60h-60zm0-300h60v-60h-60zm160 300h60v-60h-60zm0-300h60v-60h-60zM320-460" />
  </svg>
);
export default SvgCameraRoll;
