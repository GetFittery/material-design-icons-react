import * as React from "react";
import type { SVGProps } from "react";
const SvgHeight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M450-235v-490l-67 66q-9 9-21 9t-21-9q-9-9-9-21t9-21l118-118q5-5 10-7t11-2q6 0 11 2t10 7l118 118q9 9 9 21t-9 21q-9 9-21.5 9t-21.5-9l-66-66v490l67-66q9-8 21-8.5t21 8.5q9 9 9 21t-9 21L501-141q-5 5-10 7t-11 2q-6 0-11-2t-10-7L341-259q-9-9-9-21t9-21q9-9 21-8.5t21 8.5z" />
  </svg>
);
export default SvgHeight;
