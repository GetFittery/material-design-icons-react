import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M320-258v-450q0-14 9.067-22 9.066-8 21.155-8 3.778 0 7.903 1t7.875 3l354 226q7 5 10.5 11t3.5 14q0 8-3.5 14T720-458L366-232q-3.784 2-7.946 3t-7.946 1Q338-228 329-236t-9-22m60-54 269-171-269-171z" />
  </svg>
);
export default SvgPlayArrow;
