import * as React from "react";
import type { SVGProps } from "react";
const SvgViewList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-260v-440q0-24.75 17.625-42.375T180-760h600q24.75 0 42.375 17.625T840-700v440q0 24.75-17.625 42.375T780-200H180q-24.75 0-42.375-17.625T120-260m60-333h106v-107H180zm166 0h434v-107H346zm0 166h434v-106H346zm0 167h434v-107H346zm-166 0h106v-107H180zm0-167h106v-106H180z" />
  </svg>
);
export default SvgViewList;
