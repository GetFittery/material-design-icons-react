import * as React from "react";
import type { SVGProps } from "react";
const SvgPanoramaFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-160v-640h800v640zm157-160h487L577-519 446-345l-92-129z" />
  </svg>
);
export default SvgPanoramaFill;
