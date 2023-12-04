import * as React from "react";
import type { SVGProps } from "react";
const SvgFloor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-90v-60h150v-180h180v-180h180v-180h180v-150h60v210H690v180H510v180H330v180z" />
  </svg>
);
export default SvgFloor;