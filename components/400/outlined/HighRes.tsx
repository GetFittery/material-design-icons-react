import * as React from "react";
import type { SVGProps } from "react";
const SvgHighRes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-220h60v-80h24l36 80h60l-39-92q17-6 28-18t11-30v-55q0-18.75-13.125-31.875T315-460H180zm220 0h160v-60H460v-30h80v-60h-80v-30h100v-60H400zm200 0h140q17 0 28.5-11.5T780-260v-60q0-17-11.5-28.5T740-360h-80v-40h120v-60H640q-17 0-28.5 11.5T600-420v60q0 17 11.5 28.5T640-320h80v40H600zM240-360v-40h60v40zm60-140h60v-90h60v90h60v-240h-60v90h-60v-90h-60zm280 0h60v-240h-60zM100-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h760q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h760v-600H100zm0 0v-600z" />
  </svg>
);
export default SvgHighRes;
