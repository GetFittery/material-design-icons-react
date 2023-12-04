import * as React from "react";
import type { SVGProps } from "react";
const SvgTvGen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M170-120v-80h-30q-24.75 0-42.375-17.625T80-260v-480q0-24.75 17.625-42.375T140-800h680q24.75 0 42.375 17.625T880-740v480q0 24.75-17.625 42.375T820-200h-30v80h-23l-26-80H220l-27 80zm-30-140h680v-480H140zm340-240" />
  </svg>
);
export default SvgTvGen;
