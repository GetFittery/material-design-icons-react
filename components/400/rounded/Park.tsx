import * as React from "react";
import type { SVGProps } from "react";
const SvgPark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M423-229H177q-18 0-27-16t2-31l157-227h-37q-18 0-27-16t2-31l208-295q5-6 11.5-9.5T480-858q7 0 13.5 3.5T505-845l208 295q11 15 2 31t-27 16h-36l156 227q11 15 2 31t-27 16H538v119q0 13-8.5 21.5T508-80h-55q-13 0-21.5-8.5T423-110zm-187-60h189-90 290-89 189zm0 0h489L536-563h89L480-769 335-563h90z" />
  </svg>
);
export default SvgPark;
