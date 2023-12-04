import * as React from "react";
import type { SVGProps } from "react";
const SvgDraft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-80v-800h421l219 219v581zm391-554v-186H220v680h520v-494zM220-820v186zv680z" />
  </svg>
);
export default SvgDraft;
