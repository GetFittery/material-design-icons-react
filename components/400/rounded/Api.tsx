import * as React from "react";
import type { SVGProps } from "react";
const SvgApi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-375 375-480l105-105 105 105zm-85-294-83-83 126-126q9-9 20-13t22-4q11 0 22 4t20 13l126 126-83 83-85-85zM208-312 82-438q-9-9-13-20t-4-22q0-11 4-22t13-20l126-126 83 83-85 85 85 85zm544 0-83-83 85-85-85-85 83-83 126 126q9 9 13 20t4 22q0 11-4 22t-13 20zM438-82 312-208l83-83 85 85 85-85 83 83L522-82q-9 9-20 13t-22 4q-11 0-22-4t-20-13" />
  </svg>
);
export default SvgApi;
