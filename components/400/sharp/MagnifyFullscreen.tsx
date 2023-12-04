import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnifyFullscreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-160v-640h800v640zm60-60h680v-520H140zm0 0v-520zm430-180h60v-90h90v-60h-90v-90h-60v90h-90v60h90z" />
  </svg>
);
export default SvgMagnifyFullscreen;
