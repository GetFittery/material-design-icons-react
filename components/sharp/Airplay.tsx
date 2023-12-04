import * as React from "react";
import type { SVGProps } from "react";
const SvgAirplay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M6 22h12l-6-6zM23 3H1v16h6v-2H3V5h18v12h-4v2h6z" />
  </svg>
);
export default SvgAirplay;
