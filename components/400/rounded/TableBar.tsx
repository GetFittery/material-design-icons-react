import * as React from "react";
import type { SVGProps } from "react";
const SvgTableBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m255-198 45-112q9-23 29-36.5t45-13.5h76v-161q-159-5-264.5-45T80-660q0-58 117-99t283-41q166 0 283 41t117 99q0 54-105.5 94T510-521v161h76q24 0 44.5 13.5T660-310l45 112q5 14-3 26t-23 12q-8 0-15.5-5T653-178l-48-122H356l-49 123q-3 8-10.5 12.5T281-160q-15 0-23-12t-3-26m225-382q108 0 202-22t143-58q-49-36-143-58t-202-22q-108 0-202 22t-143 58q49 36 143 58t202 22m0-80" />
  </svg>
);
export default SvgTableBar;
