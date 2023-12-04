import * as React from "react";
import type { SVGProps } from "react";
const SvgPages = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-720h720v720zm60-60h600v-600H180zm0-600v600zm183 470 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90z" />
  </svg>
);
export default SvgPages;
