import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundedCorner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M114.022-114.022v-68.13h68.13v68.13zm0-165.956v-68.37h68.13v68.37zm0-165.957v-68.13h68.13v68.13zm0-165.956v-68.37h68.13v68.37zm0-165.957v-68.37h68.13v68.37zm165.956 663.826v-68.13h68.37v68.13zm0-663.826v-68.37h68.37v68.37zm165.957 663.826v-68.13h68.13v68.13zm165.956 0v-68.13h68.37v68.13zm165.957 0v-68.13h68.37v68.13zm0-165.956v-68.37h68.37v68.37zm68.37-166.196h-68.37v-197.869q0-56.163-38.821-94.984t-94.984-38.821H446.174v-68.37h200.793q82.784 0 141.017 58.234 58.234 58.233 58.234 141.017z" />
  </svg>
);
export default SvgRoundedCorner;
