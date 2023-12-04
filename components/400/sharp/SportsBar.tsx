import * as React from "react";
import type { SVGProps } from "react";
const SvgSportsBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M310-180h300v-430h-90q-28 0-47 15.5T430-552q-26 29-57 51t-63 30zm-60 60v-352q-52-14-91-53t-39-95q0-53 30.5-94.5T229-772q23-48 68.5-78T400-880q35 0 65.5 12t55.5 33q10-2 19-3.5t20-1.5q66 0 113 47t47 113q0 22-9 44t-23 36h152v400H670v80zm-70-500q0 38 31 64t69 26q32 0 58-17.5t53-50.5q23-28 55-50t74-22h140q0-45-26.5-77.5T560-780q-18 0-35.5 5.5L507-769l-19-16q-18-16-41-25.5t-47-9.5q-35 0-67 18t-47 50l-14 30-32 11q-26 9-43 36t-17 55m490 360h110v-280H670zm-360 80h300z" />
  </svg>
);
export default SvgSportsBar;
