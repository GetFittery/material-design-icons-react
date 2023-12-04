import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowSelectorTool = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m300-347 109-153h218L300-757zm305 242q-19 9-38 2t-28-26L412-401 294-236q-13 18-33.5 11T240-254v-564q0-19 17-27t32 3l443 348q17 14 9.5 34T713-440H505l124 269q9 19 2 38t-26 28M409-500" />
  </svg>
);
export default SvgArrowSelectorTool;
