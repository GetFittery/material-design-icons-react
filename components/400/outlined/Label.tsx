import * as React from "react";
import type { SVGProps } from "react";
const SvgLabel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M840-480 671-241q-13 18-31 29.5T600-200H180q-24.75 0-42.375-17.625T120-260v-440q0-24.75 17.625-42.375T180-760h420q22 0 40 11.5t31 29.5zm-75 0L611-700H180v440h431zm-585 0v220-440z" />
  </svg>
);
export default SvgLabel;
