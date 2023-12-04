import * as React from "react";
import type { SVGProps } from "react";
const SvgPrintLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M650-120v-190h40v-45q0-30.938 22.044-52.969 22.045-22.031 53-22.031Q796-430 818-407.969q22 22.031 22 52.969v45h40v190zm70-190h90v-44.912Q810-374 797.088-387q-12.913-13-32-13Q746-400 733-387.062 720-374.125 720-355zM140-588h680zm102 468v-176H80v-352h800v193q-14-9-28.5-15.5T820-482v-106H140v232h102v-76h376q-14.095 12.825-25.548 27.912Q581-389 572-372H302v192h267q8 17 18.5 32t24.5 28zm416-528v-132H302v132h-60v-192h476v192z" />
  </svg>
);
export default SvgPrintLock;
