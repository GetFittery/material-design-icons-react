import * as React from "react";
import type { SVGProps } from "react";
const SvgBuild = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M732.63-91.282 442.935-382.978q-22.522 7.761-44.762 12.402-22.239 4.641-46.803 4.641-99.475 0-168.988-69.38-69.513-69.381-69.513-168.12 0-31.478 8.756-62.421 8.756-30.942 23.679-57.405l146.275 146.196 91.921-86-150.196-150.196q25.676-15.158 56.632-24.416 30.955-9.258 61.434-9.258 101.358 0 172.309 71.021t70.951 172.479q0 23.57-4.641 46.188-4.641 22.617-12.402 45.617l293.935 292.695zm3.24-89.653 40-40-278.5-278.5q16-21 24-49.5t8-54.5q0-75-55.5-127t-126.5-53l123 126-177 166-118-117q3 77 54.667 127 51.668 50 121.333 50 25 0 53-8t49-24zm-259.631-301.63" />
  </svg>
);
export default SvgBuild;