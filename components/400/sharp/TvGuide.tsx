import * as React from "react";
import type { SVGProps } from "react";
const SvgTvGuide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-720h720v720zm60-60h600v-600H180zm0 0v-600zm140-140h60v-250h123l97 250h60l120-310h-70l-80 209-80-209H180v60h140z" />
  </svg>
);
export default SvgTvGuide;
