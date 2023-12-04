import * as React from "react";
import type { SVGProps } from "react";
const SvgHighRes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M400-220h160v-60H460v-30h80v-60h-80v-30h100v-60H400zm200 0h180v-140H660v-40h120v-60H600v140h120v40H600zM300-500h60v-90h60v90h60v-240h-60v90h-60v-90h-60zm280 0h60v-240h-60zM40-120v-720h880v720zm60-60h760v-600H100zm0 0v-600zm80-40h60v-80h24l36 80h60l-39-92q17-6 28-18t11-30v-55q0-19-13-32t-32-13H180zm60-140v-40h60v40z" />
  </svg>
);
export default SvgHighRes;
