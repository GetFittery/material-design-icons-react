import * as React from "react";
import type { SVGProps } from "react";
const SvgPropane = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M280-300h400q75 0 127.5-52.5T860-480q0-75-52.5-127.5T680-660H280q-75 0-127.5 52.5T100-480q0 75 52.5 127.5T280-300m110-420h180v-50H390zm-50 480v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T280-150v-90q-100 0-170-70T40-480q0-100 70-170t170-70h40v-60q0-24 18-42t42-18h200q24 0 42 18t18 42v60h40q100 0 170 70t70 170q0 100-70 170t-170 70v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T620-150v-90z" />
  </svg>
);
export default SvgPropane;
