import * as React from "react";
import type { SVGProps } from "react";
const SvgGridOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-720h720v720zm60-60h160v-160H180zm220 0h160v-160H400zm220 0h160v-160H620zM180-400h160v-160H180zm220 0h160v-160H400zm220 0h160v-160H620zM180-620h160v-160H180zm220 0h160v-160H400zm220 0h160v-160H620z" />
  </svg>
);
export default SvgGridOn;
