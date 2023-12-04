import * as React from "react";
import type { SVGProps } from "react";
const SvgMemory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M377-377v-205h205v205zm60-60h85v-85h-85zm-77 317v-80H200v-160h-80v-60h80v-124h-80v-60h80v-160h160v-76h60v76h124v-76h60v76h160v160h76v60h-76v124h76v60h-76v160H604v80h-60v-80H420v80zm344-140v-444H260v444zM480-480" />
  </svg>
);
export default SvgMemory;
