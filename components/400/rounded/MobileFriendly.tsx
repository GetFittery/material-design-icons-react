import * as React from "react";
import type { SVGProps } from "react";
const SvgMobileFriendly = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M220-40q-24.75 0-42.375-17.625T160-100v-760q0-24.75 17.625-42.375T220-920h440q24.75 0 42.375 17.625T720-860v146h-60v-56H220v580h440v-56h60v146q0 24.75-17.625 42.375T660-40zm0-90v30h440v-30zm378-275 218-218q9-9 21-9t21 9q9 9 9 21.5t-9 21.5L619-341q-9 9-21 9t-21-9L449-469q-9-9-8.5-21t9.5-21q9-9 21-9t21 9zM220-830h440v-30H220zm0 0v-30zm0 700v30z" />
  </svg>
);
export default SvgMobileFriendly;
