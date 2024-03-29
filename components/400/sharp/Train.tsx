import * as React from "react";
import type { SVGProps } from "react";
const SvgTrain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-340v-380q0-41 19-71.5t58.5-50q39.5-19.5 100-29T480-880q86 0 146.5 9t99 28.5Q764-823 782-793t18 73v380q0 59-40.5 99.5T660-200l60 60v20h-70l-80-80H390l-80 80h-70v-20l60-60q-59 0-99.5-40.5T160-340m320-480q-120 0-173 15.5T231-760h501q-18-27-76.5-43.5T480-820M220-545h234v-155H220zm440 60H220h520zm-146-60h226v-155H514zM335-315q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16m290 0q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16m-325 60h360q34 0 57-25t23-60v-145H220v145q0 35 23 60t57 25m180-505h252-501z" />
  </svg>
);
export default SvgTrain;
