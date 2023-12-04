import * as React from "react";
import type { SVGProps } from "react";
const SvgThumbUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M272-120v-512l278-288 58 46-52 242h359v171L767-120zm60-60h397l126-299v-93H482l53-249-203 214zm0-427v427zM79-120v-512h193v60H139v392h133v60z" />
  </svg>
);
export default SvgThumbUp;
