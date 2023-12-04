import * as React from "react";
import type { SVGProps } from "react";
const SvgLegendToggle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M20 15H4v-2h16zm0 2H4v2h16zm-5-6 5-3.55V5l-5 3.55L10 5 4 8.66V11l5.92-3.61z" />
  </svg>
);
export default SvgLegendToggle;
