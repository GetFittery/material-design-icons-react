import * as React from "react";
import type { SVGProps } from "react";
const SvgCastle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M40-120v-470h60v80h110v-330h60v80h100v-80h60v80h100v-80h60v80h100v-80h60v330h110v-80h60v470H570v-210H390v210zm60-60h230v-210h300v210h230v-270H690v-250H270v250H100zm270-310h60v-110h-60zm160 0h60v-110h-60zm-50 50" />
  </svg>
);
export default SvgCastle;
