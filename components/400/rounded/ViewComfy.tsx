import * as React from "react";
import type { SVGProps } from "react";
const SvgViewComfy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-220v-520q0-24.75 17.625-42.375T140-800h680q24.75 0 42.375 17.625T880-740v520q0 24.75-17.625 42.375T820-160H140q-24.75 0-42.375-17.625T80-220m740-290v-230H140v230zM383-220h437v-230H383zm-243 0h183v-230H140z" />
  </svg>
);
export default SvgViewComfy;
