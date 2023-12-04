import * as React from "react";
import type { SVGProps } from "react";
const SvgResize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M777.848-611.891v-165.957H611.891v-68.37h234.327v234.327zM114.022-114.022v-234.087h68.13v165.957h165.957v68.13zm0-331.913v-68.13h68.13v68.13zm0-165.956v-68.37h68.13v68.37zm0-165.957v-68.37h68.13v68.37zm165.956 0v-68.37h68.37v68.37zm165.957 663.826v-68.13h68.13v68.13zm0-663.826v-68.37h68.13v68.37zm165.956 663.826v-68.13h68.37v68.13zm165.957 0v-68.13h68.37v68.13zm0-165.956v-68.37h68.37v68.37zm0-165.957v-68.13h68.37v68.13z" />
  </svg>
);
export default SvgResize;
