import * as React from "react";
import type { SVGProps } from "react";
const SvgFlare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M40-450v-60h232v60zm271-157-80-80 42-42 80 80zm139-81v-232h60v232zm199 81-42-42 80-80 42 42zm39 157v-60h232v60zm-208 72q-42.5 0-72.25-29.75T378-480q0-42.5 29.75-72.25T480-582q42.5 0 72.25 29.75T582-480q0 42.5-29.75 72.25T480-378m212 152-85-85 42-42 85 85zm-424 0-42-42 85-85 42 42zM450-40v-232h60v232z" />
  </svg>
);
export default SvgFlare;
