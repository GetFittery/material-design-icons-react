import * as React from "react";
import type { SVGProps } from "react";
const SvgEqualizer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-160v-320h140v320zm250 0v-640h140v640zm250 0v-440h140v440z" />
  </svg>
);
export default SvgEqualizer;
