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
    <path d="M300-120 154-266l42-43 74 74v-285H100q-24.75 0-42.375-17.625T40-580v-260h60v260h170q24.75 0 42.375 17.625T330-520v285l74-73 42 42zm359 0L513-266l42-43 74 74v-285q0-24.75 17.625-42.375T689-580h171v-260h60v260q0 24.75-17.625 42.375T860-520H689v285l74-73 42 42z" />
  </svg>
);
export default SvgArrowOrEdge;
