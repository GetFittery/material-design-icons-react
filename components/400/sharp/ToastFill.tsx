import * as React from "react";
import type { SVGProps } from "react";
const SvgToastFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M240-240h480v-60H240zM120-120v-720h720v720z" />
  </svg>
);
export default SvgToastFill;
