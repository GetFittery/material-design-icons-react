import * as React from "react";
import type { SVGProps } from "react";
const SvgMimo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-240q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h680q24 0 42 18t18 42v480q0 24-18 42t-42 18H652l39 38q5 5 7 10.543 2 5.544 2 11.457v30q0 12.75-8.625 21.375T670-120H290q-12.75 0-21.375-8.625T260-150v-31q0-5.565 2-10.783Q264-197 269-202l38-38zm0-60h680v-480H140zm0 0v-480z" />
  </svg>
);
export default SvgMimo;
