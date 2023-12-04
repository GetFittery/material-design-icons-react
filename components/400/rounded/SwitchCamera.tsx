import * as React from "react";
import type { SVGProps } from "react";
const SvgSwitchCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-120q-24 0-42-18t-18-42v-513q0-23 18-41.5t42-18.5h147l55-66q8-11 20-16t26-5h184q14 0 26 5t20 16l55 66h147q23 0 41.5 18.5T880-693v513q0 24-18.5 42T820-120zm0-60h680v-513H645l-73-87H388l-73 87H140zm192-231h295l-61 61q-10 10-10 23.5t10 23.5q10 10 23.5 10t23.5-10l112-112q9-9 9-21t-9-21L612-571q-9-9-22-9t-22 9q-10 10-10 23t10 22l58 57H332l59-58q9-9 9-21.5t-8-21.5q-9-10-22-10.5t-23 9.5L235-457q-9 9-9 21t9 21l112 112q10 10 23 9.5t23-10.5q9-10 9-23t-9-23z" />
  </svg>
);
export default SvgSwitchCamera;
