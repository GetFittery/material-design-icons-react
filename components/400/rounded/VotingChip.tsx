import * as React from "react";
import type { SVGProps } from "react";
const SvgVotingChip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760h320q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200zm0-60h320q91 0 155.5-64.5T860-480q0-91-64.5-155.5T640-700H320q-91 0-155.5 64.5T100-480q0 91 64.5 155.5T320-260m20-200v70q0 8 6 14t14 6q8 0 14-6t6-14v-70h70q8 0 14-6t6-14q0-8-6-14t-14-6h-70v-70q0-8-6-14t-14-6q-8 0-14 6t-6 14v70h-70q-8 0-14 6t-6 14q0 8 6 14t14 6zm290-90v160q0 8 6 14t14 6q8 0 14-6t6-14v-170q0-13-8.5-21.5T640-590h-50q-8 0-14 6t-6 14q0 8 6 14t14 6zm-150 70" />
  </svg>
);
export default SvgVotingChip;
