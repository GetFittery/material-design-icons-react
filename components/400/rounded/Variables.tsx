import * as React from "react";
import type { SVGProps } from "react";
const SvgVariables = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-310v-340q0-12.75 8.625-21.375T150-680h660q12.75 0 21.375 8.625T840-650v340q0 12.75-8.625 21.375T810-280H150q-12.75 0-21.375-8.625T120-310m60-30h600v-280H180zm0 0v-280z" />
  </svg>
);
export default SvgVariables;
