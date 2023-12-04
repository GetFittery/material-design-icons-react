import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarViewWeek = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M514-220h123v-520H514zm-190 0h123v-520H324zm-184 0h124v-520H140zm557 0h123v-520H697zM80-160v-640h800v640z" />
  </svg>
);
export default SvgCalendarViewWeek;
