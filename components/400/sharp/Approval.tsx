import * as React from "react";
import type { SVGProps } from "react";
const SvgApproval = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-80v-320h640v320zm60-160h520v-100H220zm260-160L281-680q0-83 58.208-141.5Q397.415-880 480-880q82.585 0 140.792 58.5Q679-763 679-680zm0-78 139-202q0-58.333-40.559-99.167Q537.882-820 479.941-820T381.5-779.167Q341-738.333 341-680zm0-171" />
  </svg>
);
export default SvgApproval;
