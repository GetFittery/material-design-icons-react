import * as React from "react";
import type { SVGProps } from "react";
const SvgJavascript = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M240-360v-100h48v52h84v-192h48v240zm240 0v-80h48v32h104v-53H480v-139h200v80h-48v-32H528v53h152v139z" />
  </svg>
);
export default SvgJavascript;
