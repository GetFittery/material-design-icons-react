import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-120v-60h720v60zm0-163v-394h720v394zm60-60h600v-274H180zm-60-437v-60h720v60zm60 437v-274z" />
  </svg>
);
export default SvgCalendarViewDay;
