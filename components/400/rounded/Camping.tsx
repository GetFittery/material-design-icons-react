import * as React from "react";
import type { SVGProps } from "react";
const SvgCamping = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-110v-133q0-10 3-19t9-17l351-475-49-66q-4-5-5-10.5t-.5-11q.5-5.5 3.5-10.5t8-9q10-8 22-6t20 12l38 51 38-51q8-10 20-12t22 6q10 8 12 20t-6 22l-48 65 350 475q6 8 9 17t3 19v133q0 13-8.5 21.5T850-80H110q-13 0-21.5-8.5T80-110m400-593L140-243v103h145l171-239q9-13 24-13t24 13l171 239h145v-103zM359-140h242L480-310zm146-239 170 239-171-239q-9-13-24-13t-24 13L285-140l171-239q9-13 24.5-13t24.5 13" />
  </svg>
);
export default SvgCamping;
