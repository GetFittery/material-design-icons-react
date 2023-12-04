import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarViewMonth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-510h186v-230H140zm246 0h188v-230H386zm248 0h186v-230H634zM140-220h186v-230H140zm246 0h188v-230H386zm248 0h186v-230H634zM80-160v-640h800v640z" />
  </svg>
);
export default SvgCalendarViewMonth;
