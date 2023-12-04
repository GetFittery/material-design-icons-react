import * as React from "react";
import type { SVGProps } from "react";
const SvgColorize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-168l377-377-72-72 41-41 92 92 166-166 128 128-166 166 92 92-41 41-72-72-377 377zm60-60h87l355-355-87-87-355 355zm463-420 124-124-43-43-124 124zm0 0-43-43z" />
  </svg>
);
export default SvgColorize;
