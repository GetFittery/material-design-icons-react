import * as React from "react";
import type { SVGProps } from "react";
const SvgNoteStack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M280-80v-600h600v400L680-80zm60-60h308v-172h172v-308H340zm-164-53L71-784l591-105 26 149h-60l-14-79-473 83 79 450v85zm164 53h308l172-172v-308H340z" />
  </svg>
);
export default SvgNoteStack;
