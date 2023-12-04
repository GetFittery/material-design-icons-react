import * as React from "react";
import type { SVGProps } from "react";
const SvgGradient = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M437-438v-86h85v86zm-86 86v-86h86v86zm171 0v-86h86v86zm86-86v-86h86v86zm-342 0v-86h85v86zM120-120v-720h720v720zm146-60h85v-86h-85zm171 0h85v-86h-85zm343 0v-86zm-600-86h85.5v-86H351v86h85.75v-86h85.75v86h85.75v-86H694v86h86v-86h-86v-86h86v-342H180v342.4h85.714v85.6H180zm0 86v-600zm600-258v86zM608-266v86h86v-86z" />
  </svg>
);
export default SvgGradient;
