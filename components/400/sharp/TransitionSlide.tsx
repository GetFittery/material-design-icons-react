import * as React from "react";
import type { SVGProps } from "react";
const SvgTransitionSlide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M40-160v-640h240v640zm60-59h120v-521H100zm260 59v-640h560v640zm60-59h440v-521H420zm-200 0v-521zm200 0v-521z" />
  </svg>
);
export default SvgTransitionSlide;
