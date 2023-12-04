import * as React from "react";
import type { SVGProps } from "react";
const SvgWard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-820H80v-60h140v800h-60zM280-80v-800h520v800zm60-445q20-17 45.5-26t54.5-9h200q29 0 54.5 9t45.5 26v-295H340zm199.911-85Q511-610 490.5-630.589q-20.5-20.588-20.5-49.5Q470-709 490.589-729.5q20.588-20.5 49.5-20.5Q569-750 589.5-729.411q20.5 20.588 20.5 49.5Q610-651 589.411-630.5q-20.588 20.5-49.5 20.5M340-140h400v-260q0-42-29-71t-71-29H440q-42 0-71 29t-29 71zm170-70h60v-80h80v-60h-80v-80h-60v80h-80v60h80zm-170 70h400z" />
  </svg>
);
export default SvgWard;
