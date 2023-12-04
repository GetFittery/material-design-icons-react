import * as React from "react";
import type { SVGProps } from "react";
const SvgMarkdownPaste = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M500-120v-280q0-25 17.625-42.5T560-460h260q24.75 0 42.375 17.625T880-400v280h-60v-280H720v200h-60v-200H560v280zm-320 0q-26 0-43-17t-17-43v-600q0-26 17-43t43-17h202q7-35 34.5-57.5T480-920q36 0 63.5 22.5T578-840h202q26 0 43 17t17 43v260h-60v-260h-60v90H240v-90h-60v600h260v60zm300-660q17 0 28.5-11.5T520-820q0-17-11.5-28.5T480-860q-17 0-28.5 11.5T440-820q0 17 11.5 28.5T480-780" />
  </svg>
);
export default SvgMarkdownPaste;
