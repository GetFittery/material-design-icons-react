import * as React from "react";
import type { SVGProps } from "react";
const SvgTextToSpeech = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-80q-24.75 0-42.375-17.625T80-140v-680q0-24.75 17.625-42.375T140-880h380l-60 60H140v680h480v-140h60v140q0 24.75-17.625 42.375T620-80zm100-170v-60h280v60zm0-120v-60h200v60zm380 10L460-520H320v-200h140l160-160zm60-92v-346q56 21 88 74t32 104q0 51-35 101t-85 67m0 142v-62q70-25 125-90t55-158q0-93-55-158t-125-90v-62q102 27 171 112.5T920-620q0 112-69 197.5T680-310" />
  </svg>
);
export default SvgTextToSpeech;
