import * as React from "react";
import type { SVGProps } from "react";
const SvgSpaceBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-360v-240h60v180h520v-180h60v240z" />
  </svg>
);
export default SvgSpaceBar;
