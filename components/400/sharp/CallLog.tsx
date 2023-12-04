import * as React from "react";
import type { SVGProps } from "react";
const SvgCallLog = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M740-80q-108 0-225-56.5T296-295Q193-397 136.5-514T80-740v-60h215l40 189-117 119q28 45 57.5 83.5T337-338q36 36 77 67.5t88 57.5l117-121 181 39v215zM189-548l81-82-23-110H140q0 38 11.5 85T189-548m369 363q41 19 89 31t93 14v-107l-103-21zm-58-635v-60h380v60zm0 140v-60h380v60zm0 140v-60h380v60z" />
  </svg>
);
export default SvgCallLog;
