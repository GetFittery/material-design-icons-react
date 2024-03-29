import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectionsRailway = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M240-120v-40l60-40q-59 0-99.5-40.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 59-40.5 99.5T660-200l60 40v40zm-20-425h520v-155H220zm440 60H220h520zM480.059-315Q503-315 519-331.059q16-16.059 16-39T518.941-409q-16.059-16-39-16T441-408.941q-16 16.059-16 39T441.059-331q16.059 16 39 16M300-255h360q34 0 57-25t23-60v-145H220v145q0 35 23 60t57 25m180-565q-120 0-173 15.5T231-760h501q-18-27-76.5-43.5T480-820m0 60h252-501z" />
  </svg>
);
export default SvgDirectionsRailway;
