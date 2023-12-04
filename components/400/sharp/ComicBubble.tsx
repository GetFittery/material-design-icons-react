import * as React from "react";
import type { SVGProps } from "react";
const SvgComicBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m440-831-91.212 91.212H220.212v128.576L129-520l91.212 91.212v128.576h128.576L440-209l104-104 210 107-108-209 105-105-91.212-91.212v-128.576H531.212zm0-85 116 116h164v164l116 116-116 116 129 253-40 40-253-129-116 116-116-116H160v-164L44-520l116-116v-164h164zm1 398" />
  </svg>
);
export default SvgComicBubble;
