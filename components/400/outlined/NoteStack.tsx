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
    <path d="M280-140v-480q0-25.063 17.5-42.532Q315-680 340-680h480q24.75 0 42.375 17.625T880-620v340L680-80H340q-24.75 0-42.375-17.625T280-140M81-725q-5-25 9.5-44.5T130-794l473-84q25-5 44.5 9t24.5 39l16 90h-60l-14-79-473 83 79 450v83q-20-2-35-15t-19-34zm259 105v480h308v-172h172v-308zm240 240" />
  </svg>
);
export default SvgNoteStack;
