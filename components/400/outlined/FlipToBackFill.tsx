import * as React from "react";
import type { SVGProps } from "react";
const SvgFlipToBackFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24.75 0-42.375-17.625T120-180v-495h60v495h495v60zm165-225v60q-24.75 0-42.375-17.625T285-345zm-60-105v-60h60v60zm0-165v-60h60v60zm60-165h-60q0-24.75 17.625-42.375T345-840zm105 495v-60h60v60zm0-495v-60h60v60zm165 0v-60h60v60zm0 495v-60h60v60zm165-495v-60q24.75 0 42.375 17.625T840-780zm0 435h60q0 24.75-17.625 42.375T780-285zm0-105v-60h60v60zm0-165v-60h60v60z" />
  </svg>
);
export default SvgFlipToBackFill;
