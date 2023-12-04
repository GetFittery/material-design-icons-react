import * as React from "react";
import type { SVGProps } from "react";
const SvgChess = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-140h600v-120H180zm132-180h336l-24-170H336zM120-80v-240h132l24-170H170v-60h620v60H684l24 170h132v240zm153-470-73-330q31 30 68 46.5t75 16.5q37 0 71.5-16t65.5-47q31 31 65.5 47t71.5 16q37 0 74.5-16.5T760-880l-73 330h-62l46-213q-16 3-30.5 5t-28.5 2q-36 0-69-10.5T480-797q-30 20-63 30.5T348-756q-14 0-28.5-2t-30.5-5l46 213zm207 410" />
  </svg>
);
export default SvgChess;
