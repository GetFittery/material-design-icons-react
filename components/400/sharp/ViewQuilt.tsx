import * as React from "react";
import type { SVGProps } from "react";
const SvgViewQuilt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-760h720v560H120zm270 60v190h390v-190zm390 250H619v190h161zm-390 0v190h162v-190zM180-260h150v-440H180z" />
  </svg>
);
export default SvgViewQuilt;
