import * as React from "react";
import type { SVGProps } from "react";
const SvgBattery1Bar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M280-80v-736h120v-64h160v64h120v736zm60-148h280v-528H340z" />
  </svg>
);
export default SvgBattery1Bar;
