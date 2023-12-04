import * as React from "react";
import type { SVGProps } from "react";
const SvgFloor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M270-150v-150q0-12.75 8.625-21.375T300-330h150v-150q0-12.75 8.625-21.375T480-510h150v-150q0-12.75 8.625-21.375T660-690h150v-120q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T870-810v150q0 12.75-8.625 21.375T840-630H690v150q0 12.75-8.625 21.375T660-450H510v150q0 12.75-8.625 21.375T480-270H330v150q0 12.75-8.625 21.375T300-90H150q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T150-150z" />
  </svg>
);
export default SvgFloor;
