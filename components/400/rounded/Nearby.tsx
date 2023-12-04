import * as React from "react";
import type { SVGProps } from "react";
const SvgNearby = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M459-298 298-459q-9-9-9-21t9-21l161-161q9-9 21-9t21 9l161 161q9 9 9 21t-9 21L501-298q-9 9-21 9t-21-9m64 197q-9 9-20 13.5T481-83q-11 0-22.5-4.5T438-101L101-438q-9-9-13.5-20T83-480q0-11 4.5-22.5T101-523l338-338q8-8 19-12.5t22-4.5q11 0 22 4.5t19 12.5l338 338q9 9 13.5 20.333Q877-491.333 877-480q0 11.25-4.696 22.5Q867.609-446.25 859-438zm-43-66 313-313-313-313-313 313z" />
  </svg>
);
export default SvgNearby;
