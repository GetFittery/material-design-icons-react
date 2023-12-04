import * as React from "react";
import type { SVGProps } from "react";
const SvgFloorLamp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M450-200v-320H227q-15.455 0-24.727-12.5Q193-545 198-559l86-279q6.105-18.75 22.132-30.375Q322.158-880 342-880h276q19.842 0 35.868 11.625Q669.895-856.75 676-838l86 279q5 14-4.273 26.5Q748.455-520 733-520H510v320zM267-580h426l-74-240H341zm63 500v-60h300v60zm150-620" />
  </svg>
);
export default SvgFloorLamp;
