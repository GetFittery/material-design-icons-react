import * as React from "react";
import type { SVGProps } from "react";
const SvgElectricBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M15 2 2.5 13 13 14l-5 7 1 1 12.5-11L11 10l5-7z" />
  </svg>
);
export default SvgElectricBolt;