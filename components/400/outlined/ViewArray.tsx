import * as React from "react";
import type { SVGProps } from "react";
const SvgViewArray = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M329-700v440zm392 500v-560h119v560zm-452 0v-560h422v560zm-149 0v-560h119v560zm209-60h302v-440H329z" />
  </svg>
);
export default SvgViewArray;
