import * as React from "react";
import type { SVGProps } from "react";
const SvgViewTimeline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M250-279h220v-60H250zm240-342h220v-60H490zM370-450h220v-60H370zM120-120v-720h720v720zm60-60h600v-600H180zm0 0v-600z" />
  </svg>
);
export default SvgViewTimeline;
