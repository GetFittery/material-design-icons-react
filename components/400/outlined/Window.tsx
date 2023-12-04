import * as React from "react";
import type { SVGProps } from "react";
const SvgWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h600q24.75 0 42.375 17.625T840-780v600q0 24.75-17.625 42.375T780-120zm330-330v270h270v-270zm0-60h270v-270H510zm-60 0v-270H180v270zm0 60H180v270h270z" />
  </svg>
);
export default SvgWindow;
