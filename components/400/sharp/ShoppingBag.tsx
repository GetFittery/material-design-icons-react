import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingBag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-80v-640h170v-10q0-63 43.5-106.5T480-880q63 0 106.5 43.5T630-730v10h170v640zm60-60h520v-520H630v120h-60v-120H390v120h-60v-120H220zm170-580h180v-10q0-38-26-64t-64-26q-38 0-64 26t-26 64zM220-140v-520z" />
  </svg>
);
export default SvgShoppingBag;
