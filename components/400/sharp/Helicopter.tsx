import * as React from "react";
import type { SVGProps } from "react";
const SvgHelicopter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M370-430v-270h-10q-109 0-184.5 75.833Q100-548.333 100-440v10zm170 170v-440H430v330H100v110zm60-126 260-28v-86H600zM520-80H120v-60h400zm80-120H40v-240q0-134 93-227t227-93h240v200h200l40-80h80v280l-320 34zm160-620H120v-60h640zM600-386v-114zm-60 126" />
  </svg>
);
export default SvgHelicopter;
