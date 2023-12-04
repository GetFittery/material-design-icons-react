import * as React from "react";
import type { SVGProps } from "react";
const SvgCapture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M230-310h500v-340H230zM80-160v-640h800v640zm60-60h680v-520H140zm0 0v-520z" />
  </svg>
);
export default SvgCapture;
