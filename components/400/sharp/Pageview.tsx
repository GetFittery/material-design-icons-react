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
    <path d="M675-160H80v-640h800v640H760L557-367q-21 18-45 26t-51 8q-70 0-120.5-49T290-502q0-72 50.5-120.5T461-671q70 0 118.5 48.5T628-502q0 25-7.5 47.5T599-410l186 190h35v-520H140v520h475zM461-393q46 0 76.5-31t30.5-78q0-48-30.5-78.5T461-611q-46 0-78.5 30.5T350-502q0 47 32.5 78t78.5 31M140-220v-520z" />
  </svg>
);
export default SvgPageview;
