import * as React from "react";
import type { SVGProps } from "react";
const SvgContentCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M300-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18zm0-60h440v-560H300zM180-80q-24 0-42-18t-18-42v-590q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T180-730v590h470q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5Q680-97 671.375-88.5T650-80zm120-180v-560z" />
  </svg>
);
export default SvgContentCopy;
