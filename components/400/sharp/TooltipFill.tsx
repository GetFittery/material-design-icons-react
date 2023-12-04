import * as React from "react";
import type { SVGProps } from "react";
const SvgTooltipFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-80 374-240H80v-640h800v640H586z" />
  </svg>
);
export default SvgTooltipFill;
