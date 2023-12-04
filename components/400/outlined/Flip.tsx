import * as React from "react";
import type { SVGProps } from "react";
const SvgFlip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M349-120H180q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h169v60H180v600h169zm103 80v-880h60v880zm163-80v-60h60v60zm0-660v-60h60v60zm165 660v-60h60q0 25-17.625 42.5T780-120m0-165v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm0-165v-60q24.75 0 42.375 17.625T840-780z" />
  </svg>
);
export default SvgFlip;
