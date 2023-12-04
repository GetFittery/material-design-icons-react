import * as React from "react";
import type { SVGProps } from "react";
const SvgPost = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M780-120H180q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h600q24.75 0 42.375 17.625T840-780v600q0 24.75-17.625 42.375T780-120m-20-143H200v78h560zm-560-41h560v-78H200zm0-129h560v-327H200zm0 170v78zm0-41v-78zm0-129v-327zm0 51v-51zm0 119v-41z" />
  </svg>
);
export default SvgPost;
