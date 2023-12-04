import * as React from "react";
import type { SVGProps } from "react";
const SvgVignette = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm0 0v-520zm341-99q99.633 0 171.817-47.5Q725-414 725-480t-72.183-113.5Q580.633-641 481-641q-99.633 0-171.817 47.5Q237-546 237-480t72.183 113.5Q381.367-319 481-319m-.178-60Q406-379 351.5-408.5T297-480q0-42 54.678-71.5t129.5-29.5Q556-581 610.5-551.5T665-480q0 42-54.678 71.5t-129.5 29.5" />
  </svg>
);
export default SvgVignette;
