import * as React from "react";
import type { SVGProps } from "react";
const SvgRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-160q-24.75 0-42.375-17.625T80-220v-520q0-24.75 17.625-42.375T140-800h680q24.75 0 42.375 17.625T880-740v520q0 24.75-17.625 42.375T820-160zm0-60h680v-520H140zm0 0v-520z" />
  </svg>
);
export default SvgRectangle;
