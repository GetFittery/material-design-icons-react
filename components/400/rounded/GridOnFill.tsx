import * as React from "react";
import type { SVGProps } from "react";
const SvgGridOnFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120h140v-200H120v140q0 24.75 17.625 42.375T180-120m200 0h200v-200H380zm260 0h140q24.75 0 42.375-17.625T840-180v-140H640zM120-380h200v-200H120zm260 0h200v-200H380zm260 0h200v-200H640zM120-640h200v-200H180q-24.75 0-42.375 17.625T120-780zm260 0h200v-200H380zm260 0h200v-140q0-24.75-17.625-42.375T780-840H640z" />
  </svg>
);
export default SvgGridOnFill;
