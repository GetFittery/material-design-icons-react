import * as React from "react";
import type { SVGProps } from "react";
const SvgToggleOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70zm0-60h400q75 0 127.5-52.5T860-480q0-75-52.5-127.5T680-660H280q-75 0-127.5 52.5T100-480q0 75 52.5 127.5T280-300m-1.059-79Q321-379 350.5-408.441t29.5-71.5Q380-522 350.559-551.5t-71.5-29.5Q237-581 207.5-551.559t-29.5 71.5Q178-438 207.441-408.5t71.5 29.5M480-480" />
  </svg>
);
export default SvgToggleOff;
