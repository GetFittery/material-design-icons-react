import * as React from "react";
import type { SVGProps } from "react";
const SvgScan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M220-80q-24.75 0-42.375-17.625T160-140v-170h60v170h520v-170h60v170q0 24.75-17.625 42.375T740-80zm-60-740q0-24.75 17.625-42.375T220-880h336q12.444 0 23.722 5T599-862l183 183q8 8 13 19.278 5 11.278 5 23.722v146h-60v-144H581q-12.75 0-21.375-8.625T551-664v-156H220v330h-60zm730 450H70q-12.75 0-21.375-8.675Q40-387.351 40-400.175 40-413 48.625-421.5T70-430h820q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890-370m-410 60" />
  </svg>
);
export default SvgScan;
