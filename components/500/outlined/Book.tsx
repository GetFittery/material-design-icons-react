import * as React from "react";
import type { SVGProps } from "react";
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M222.152-74.022q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-675.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h515.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v675.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265zm0-68.13h515.696v-675.696h-57.37v266l-97-56-97 56v-266H222.152zm0 0v-675.696zm264.326-409.696 97-56 97 56-97-56z" />
  </svg>
);
export default SvgBook;
