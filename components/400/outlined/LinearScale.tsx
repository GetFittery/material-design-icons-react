import * as React from "react";
import type { SVGProps } from "react";
const SvgLinearScale = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M680-280q-74 0-129-47t-69-123H276q-10 29-36.5 49.5T179-380q-41 0-70.5-29.5T79-480q0-41 29.5-70.5T179-580q34 0 60.5 20.5T276-510h206q14-76 69-123t129-47q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280m0-60q59 0 99.5-40.5T820-480q0-59-40.5-99.5T680-620q-59 0-99.5 40.5T540-480q0 59 40.5 99.5T680-340" />
  </svg>
);
export default SvgLinearScale;
