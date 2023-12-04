import * as React from "react";
import type { SVGProps } from "react";
const SvgMovie = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-160v-640h60l74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h172v640zm60-428v368h680v-368zm0 0v368z" />
  </svg>
);
export default SvgMovie;
