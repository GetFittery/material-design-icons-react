import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaceItemFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24.75 0-42.375-17.625T120-180v-440q0-24.75 17.625-42.375T180-680h180q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T360-620H180v440h600v-440H600q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T600-680h180q24.75 0 42.375 17.625T840-620v440q0 24.75-17.625 42.375T780-120zm330-319 68-68q8.5-9 21.25-9t21.75 9q9 9 9 21.5t-9 21.5L501-344q-9 9-21 9t-21-9L339-464q-9-9-8.5-21.5T340-507q9-9 21.5-9t21.5 9l67 68v-491q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-930z" />
  </svg>
);
export default SvgPlaceItemFill;