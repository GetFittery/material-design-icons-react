import * as React from "react";
import type { SVGProps } from "react";
const SvgFactory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-80q-24.75 0-42.375-17.625T80-140v-381q0-18.375 10-33.688Q100-570 117-577l201-85q15-6 28.5 2.25T360-635v35l159-64q15-6 28 3.067 13 9.066 13 24.933v76h320v420q0 24.75-17.625 42.375T820-80zm0-60h680v-359.801H500V-592l-200 80v-79l-160 71zm310-100h60v-160h-60zm-160 0h60v-160h-60zm320 0h60v-160h-60zm270-320H700l37-294q2-11 10.027-18.5T766-880h48q10.946 0 18.973 7.5T843-854zM140-140h680z" />
  </svg>
);
export default SvgFactory;
