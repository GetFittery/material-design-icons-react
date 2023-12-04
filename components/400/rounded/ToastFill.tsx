import * as React from "react";
import type { SVGProps } from "react";
const SvgToastFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M270-240h420q13 0 21.5-8.5T720-270q0-13-8.5-21.5T690-300H270q-13 0-21.5 8.5T240-270q0 13 8.5 21.5T270-240m-90 120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" />
  </svg>
);
export default SvgToastFill;
