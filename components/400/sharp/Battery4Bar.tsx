import * as React from "react";
import type { SVGProps } from "react";
const SvgBattery4Bar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M340-492h280v-264H340zM280-80v-736h120v-64h160v64h120v736z" />
  </svg>
);
export default SvgBattery4Bar;
