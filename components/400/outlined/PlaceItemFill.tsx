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
    <path d="M180-120q-24.75 0-42.375-17.625T120-180v-440q0-24.75 17.625-42.375T180-680h210v60H180v440h600v-440H570v-60h210q24.75 0 42.375 17.625T840-620v440q0 24.75-17.625 42.375T780-120zm300-203L318-485l43-43 89 89v-521h60v521l89-89 43 43z" />
  </svg>
);
export default SvgPlaceItemFill;
