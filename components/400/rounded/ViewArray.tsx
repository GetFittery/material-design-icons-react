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
    <path d="M329-260v-440zm422 60q-12.75 0-21.375-8.625T721-230v-500q0-12.75 8.625-21.375T751-760h59q12.75 0 21.375 8.625T840-730v500q0 12.75-8.625 21.375T810-200zm-452 0q-12.75 0-21.375-8.625T269-230v-500q0-12.75 8.625-21.375T299-760h362q12.75 0 21.375 8.625T691-730v500q0 12.75-8.625 21.375T661-200zm-149 0q-12.75 0-21.375-8.625T120-230v-500q0-12.75 8.625-21.375T150-760h59q12.75 0 21.375 8.625T239-730v500q0 12.75-8.625 21.375T209-200zm179-500v440h302v-440z" />
  </svg>
);
export default SvgViewArray;
