import * as React from "react";
import type { SVGProps } from "react";
const SvgLockClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M350-634h260v-93q0-57-37.5-95T480-860q-55 0-92.5 38T350-727zM557-80H220q-23 0-41.5-18.5T160-140v-434q0-23 18.5-41.5T220-634h70v-93q0-81 55-137t135-56q80 0 135 56t55 137v93h70q23 0 41.5 18.5T800-574v87q-13-3-27-4t-33-1v-82H220v434h301q7 17 15 30.5T557-80m196 34q-79 0-136-57t-57-136q0-79 57-136t136-57q79 0 136 57t57 136q0 79-57 136T753-46m74-92 27-27-84-76v-124h-42v135.776zM220-574v434z" />
  </svg>
);
export default SvgLockClock;