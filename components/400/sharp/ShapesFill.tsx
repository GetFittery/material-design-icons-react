import * as React from "react";
import type { SVGProps } from "react";
const SvgShapesFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M360-320q-117 0-198.5-81.5T80-600q0-117 81.5-198.5T360-880q117 0 198.5 81.5T640-600q0 117-81.5 198.5T360-320M320-80v-182q10 2 20 2h20q142 0 241-99t99-241v-20q0-10-2-20h182v560z" />
  </svg>
);
export default SvgShapesFill;
