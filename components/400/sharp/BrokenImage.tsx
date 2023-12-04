import * as React from "react";
import type { SVGProps } from "react";
const SvgBrokenImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-720h720v720zm103-314 172-172 170 170 171-171 44 44v-217H180v303zm-43 254h600v-298l-44-44-171 171-170-170-172 172-43-43zm0 0v-298 60-362z" />
  </svg>
);
export default SvgBrokenImage;
