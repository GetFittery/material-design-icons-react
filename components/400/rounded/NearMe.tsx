import * as React from "react";
import type { SVGProps } from "react";
const SvgNearMe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M413-413 137-520q-10-4-14.5-12t-4.5-17q0-9 4.5-16t14.5-11l641-241q9-4 17.5-1.5T810-810q6 6 8.5 14.5T817-778L576-137q-4 10-11 14.5t-16 4.5q-9 0-17-4.5T520-137zm132 179 192-503-502 192 224 86zm-86-225" />
  </svg>
);
export default SvgNearMe;
