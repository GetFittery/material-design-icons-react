import * as React from "react";
import type { SVGProps } from "react";
const SvgStickyNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v434q0 12.444-5 23.722T822-303L657-138q-8 8-19.278 13-11.278 5-23.722 5zm429-60v-83q0-35 26.5-61.5T697-351h83v-429H180v600zM450-579v228q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625T510-351v-228h99q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T609-639H351q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T351-579zM180-180v-600z" />
  </svg>
);
export default SvgStickyNote;
