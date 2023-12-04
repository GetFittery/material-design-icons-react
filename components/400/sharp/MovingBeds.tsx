import * as React from "react";
import type { SVGProps } from "react";
const SvgMovingBeds = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-80v-800h520v800zm60-445q20-17 45.5-26t54.5-9h200q29 0 54.5 9t45.5 26v-295H140zm199.911-85Q311-610 290.5-630.589q-20.5-20.588-20.5-49.5Q270-709 290.589-729.5q20.588-20.5 49.5-20.5Q369-750 389.5-729.411q20.5 20.588 20.5 49.5Q410-651 389.411-630.5q-20.588 20.5-49.5 20.5M780-340l-42-42 67-68H640v-60h165l-67-68 42-42 140 140zM140-140h400v-260q0-42-29-71t-71-29H240q-42 0-71 29t-29 71zm170-70h60v-80h80v-60h-80v-80h-60v80h-80v60h80zm-170 70h400z" />
  </svg>
);
export default SvgMovingBeds;