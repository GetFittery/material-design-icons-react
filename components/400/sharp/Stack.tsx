import * as React from "react";
import type { SVGProps } from "react";
const SvgStack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M260-380v60H80v-560h560v180h-60v-120H140v440zm60 300v-560h560v560zm60-60h440v-440H380zm220-220" />
  </svg>
);
export default SvgStack;
