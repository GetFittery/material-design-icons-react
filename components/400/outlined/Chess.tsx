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
    <path d="M180-140h600v-120H180zm132-180h336l-24-170H336zM120-80v-180q0-24.75 17.625-42.375T180-320h72l24-170H170v-60h620v60H684l24 170h72q24.75 0 42.375 17.625T840-260v180zm153-470-73-330q31 30 68 46.5t75.415 16.5Q380-817 414.5-833q34.5-16 65.5-47 31 31 65.5 47t71.5 16q37 0 74.5-16.5T760-880l-73 330h-62l46-213q-16 3-30.5 5t-28.5 2q-36 0-69-10.5T480-797q-30 20-63 30.5T348-756q-14 0-28.5-2t-30.5-5l46 213zm207 410" />
  </svg>
);
export default SvgChess;
