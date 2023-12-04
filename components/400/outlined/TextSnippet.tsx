import * as React from "react";
import type { SVGProps } from "react";
const SvgTextSnippet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-180h600v-375L555-780H180zm0 60q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h400l260 260v400q0 24.75-17.625 42.375T780-120zm99-171h402v-60H279zm0-159h402v-60H279zm0-159h276v-60H279zm-99 429v-600z" />
  </svg>
);
export default SvgTextSnippet;
