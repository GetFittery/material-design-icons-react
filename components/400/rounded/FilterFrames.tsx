import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterFrames = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-80q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h180l139-139q9-9 21-9t21 9l139 139h180q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h680v-600H140zm100-130v-340q0-12.75 8.625-21.375T270-640h420q12.75 0 21.375 8.625T720-610v340q0 12.75-8.625 21.375T690-240H270q-12.75 0-21.375-8.625T240-270m60-30h360v-280H300zm180-139" />
  </svg>
);
export default SvgFilterFrames;
