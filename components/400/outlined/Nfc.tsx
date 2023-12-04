import * as React from "react";
import type { SVGProps } from "react";
const SvgNfc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M240-240h480v-480H510q-26 0-43 17t-17 43v128q-15 8.556-22.5 21.778T420-480q0 26 17 43t43 17q26 0 43-17t17-43q0-17.351-8-30.175Q524-523 510-532v-128h150v360H300v-360h113v-60H240zm-60 120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" />
  </svg>
);
export default SvgNfc;
