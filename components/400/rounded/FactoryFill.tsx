import * as React from "react";
import type { SVGProps } from "react";
const SvgFactoryFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-80q-25 0-42.5-17.5T80-140v-381q0-18 10-33.5t27-22.5l201-85q15-6 28.5 2.5T360-635v35l159-64q15-6 28 3t13 25v76h320v420q0 25-17.5 42.5T820-80zm310-160h60v-160h-60zm-160 0h60v-160h-60zm320 0h60v-160h-60zm265-360H705l32-254q2-11 10-18.5t19-7.5h48q11 0 19 7.5t10 18.5z" />
  </svg>
);
export default SvgFactoryFill;
