import * as React from "react";
import type { SVGProps } from "react";
const SvgTabGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18zm0-60h560v-380H550q-12.75 0-21.375-8.625T520-670v-150H260zM140-80q-24 0-42-18t-18-42v-590q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T140-730v590h590q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5Q760-97 751.375-88.5T730-80zm120-740v560z" />
  </svg>
);
export default SvgTabGroup;
