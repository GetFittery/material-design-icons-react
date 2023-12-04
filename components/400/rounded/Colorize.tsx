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
    <path d="M120-150v-113q0-12 5-23.5t13-19.5l359-359-72-72 41-41 92 92 142-142q5-5 11-8t12-3q6 0 12 3t12 8l81 81q5 6 8 12t3 12q0 6-3 12t-8 11L686-558l92 92-41 41-72-72-359 359q-8 8-19.5 13t-23.5 5H150q-13 0-21.5-8.5T120-150m60-30h87l355-355-87-87-355 355zm463-420 124-124-43-43-124 124zm0 0-43-43z" />
  </svg>
);
export default SvgColorize;
