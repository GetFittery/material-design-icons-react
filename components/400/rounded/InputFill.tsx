import * as React from "react";
import type { SVGProps } from "react";
const SvgInputFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-160q-24 0-42-18t-18-42v-139q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T140-359v139h680v-520H140v141q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Q97-569 88.5-577.625T80-599v-141q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm379-289H110q-12.75 0-21.375-8.675Q80-466.351 80-479.175 80-492 88.625-500.5T110-509h409l-82-82q-9-9-8.583-21.1.416-12.1 9.583-20.9 9-9 21.5-9t21.5 9l133 133q9 9 9 21t-9 21L480-324q-9 9-21 8.5t-21.391-9.5Q429-334 429-346.5t9-21.5z" />
  </svg>
);
export default SvgInputFill;
