import * as React from "react";
import type { SVGProps } from "react";
const SvgKettle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M250-200v-533L140-880h580v130h100q24.75 0 42.375 17.625T880-690v220q0 24.75-17.625 42.375T820-410H720v210zm60-60h350v-560H260l50 65zm410-210h100v-220H720zM500-320h100v-440H500zM120-80v-60h720v60zm340-460" />
  </svg>
);
export default SvgKettle;
