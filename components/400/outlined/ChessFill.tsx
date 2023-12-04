import * as React from "react";
import type { SVGProps } from "react";
const SvgChessFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-80v-180q0-25 17.5-42.5T180-320h72l24-170H170v-60h620v60H684l24 170h72q25 0 42.5 17.5T840-260v180zm140-530-60-270q31 30 68 46.5t75 16.5q37 0 71.5-16t65.5-47q31 31 65.5 47t71.5 16q37 0 74.5-16.5T760-880l-60 270z" />
  </svg>
);
export default SvgChessFill;
