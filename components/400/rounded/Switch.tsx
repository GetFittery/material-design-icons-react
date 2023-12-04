import * as React from "react";
import type { SVGProps } from "react";
const SvgSwitch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M600-290q12.75 0 21.375-8.625T630-320v-320q0-12.75-8.625-21.375T600-670H360q-12.75 0-21.375 8.625T330-640v320q0 12.75 8.625 21.375T360-290zm-210-60v-260h180v260zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600zm300.175 290q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5" />
  </svg>
);
export default SvgSwitch;
