import * as React from "react";
import type { SVGProps } from "react";
const SvgStackedInbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M150-240v-600h780v600zm60-214v154h660v-154H680q-19 45-55.5 71.5T540-356q-48 0-84.5-26.5T400-454zm330 38q38 0 67-30t29-68h234v-266H210v266h234q0 38 29 68t67 30m199 296H30v-529h60v469h649zM210-300h660z" />
  </svg>
);
export default SvgStackedInbox;
