import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowOrEdge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M300-120 154-266l42-43 74 74v-285H40v-320h60v260h230v345l74-73 42 42zm359 0L513-266l42-43 74 74v-345h231v-260h60v320H689v285l74-73 42 42z" />
  </svg>
);
export default SvgArrowOrEdge;
