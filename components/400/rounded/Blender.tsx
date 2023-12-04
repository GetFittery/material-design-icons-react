import * as React from "react";
import type { SVGProps } from "react";
const SvgBlender = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M300-80q-24 0-42-18t-18-42v-56q0-45 22.5-82t65.5-65l-33-190H180q-24 0-42-18t-18-42v-187q0-25 17.5-42.5T180-840h212v-10q0-13 8.5-21.5T422-880h106q13 0 21.5 8.5T558-850v10h125q14 0 23 10.5t7 24.5l-81 462q43 28 65.5 65t22.5 82v56q0 24-18 42t-42 18zm-16-513-32-187h-72v187zm196 393q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200m-98-180h196l70-400H312zm-82 240h360v-56q0-54-40-89t-99-35h-82q-59 0-99 35t-40 89zm180-90" />
  </svg>
);
export default SvgBlender;
