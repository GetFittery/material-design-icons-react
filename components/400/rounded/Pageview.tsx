import * as React from "react";
import type { SVGProps } from "react";
const SvgPageview = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M675-160H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18h-60.361L557-367q-21 18-45 26t-51 8q-70 0-120.5-49T290-502.5q0-71.5 50.5-120T461-671q70 0 118.5 48.5T628-502q0 25.2-7.5 47.6Q613-432 599-410l186 190h35v-520H140v520h475zM461-393q46 0 76.5-31t30.5-78.5q0-47.5-30.5-78T461-611q-46 0-78.5 30.5t-32.5 78q0 47.5 32.5 78.5t78.5 31M140-220v-520z" />
  </svg>
);
export default SvgPageview;
