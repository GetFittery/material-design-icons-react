import * as React from "react";
import type { SVGProps } from "react";
const SvgTram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-260v-394q0-90 70.5-119T449-804l32-66H305q-11 0-18-7t-7-18q0-11 7-18t18-7h350q11 0 18 7t7 18q0 11-7 18t-18 7H541l-30 66q126 2 207.5 30.5T800-654v394q0 59-40.5 99.5T660-120l26 26q15 15 7 34.5T663-40q-6 0-11.5-2T641-49l-71-71H390l-71 71q-5 5-10.5 7T297-40q-21 0-29.5-19.5T274-94l26-26q-59 0-99.5-40.5T160-260m505-154H220h519zM483-244q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16m-2-445h251-509zM220-474h519v-155H220zm74 290h371q32 0 53-22t21-54v-154H220v154q0 32 21.5 54t52.5 22m187-560q-123 0-185.5 14.5T223-689h509q-10-20-70.5-37.5T481-744" />
  </svg>
);
export default SvgTram;
