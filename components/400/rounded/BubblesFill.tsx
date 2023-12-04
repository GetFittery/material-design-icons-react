import * as React from "react";
import type { SVGProps } from "react";
const SvgBubblesFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M501-440 377-564q-9-9-9-21t9-21q9-9 21.5-9t21.5 9l123 123v-73q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T603-556v146q0 12.75-8.625 21.375T573-380H427q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T427-440zm269 280q-45 0-77.5-32.5t-32.5-78q0-45.5 32.5-77.5t78-32q45.5 0 77.5 32.083 32 32.084 32 77.917 0 45-32.083 77.5Q815.833-160 770-160m-630 0q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v270q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T820-470v-270H140v520h430q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T570-160z" />
  </svg>
);
export default SvgBubblesFill;