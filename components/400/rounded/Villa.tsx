import * as React from "react";
import type { SVGProps } from "react";
const SvgVilla = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-180v-421q0-18.667 10.431-33.973Q140.863-650.28 158-657l436-168q15-6 28 3.067 13 9.066 13 24.933v317h85q0-24.75 17.677-42.375t42.5-17.625Q805-540 822.5-522.375T840-480v300q0 24.75-17.625 42.375T780-120H180q-24.75 0-42.375-17.625T120-180m60 0h190v-240q0-24.75 17.625-42.375T430-480h145v-273L180-601.002zm250 0h145v-80q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T635-260v80h145v-240H430zm175-120" />
  </svg>
);
export default SvgVilla;
