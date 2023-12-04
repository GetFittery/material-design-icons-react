import * as React from "react";
import type { SVGProps } from "react";
const SvgRangeHood = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-160q-24.75 0-42.375-17.625T80-220v-188q0-16 6.5-30.5T104-464l176-176v-140q0-24.75 17.625-42.375T340-840h280q24.75 0 42.375 17.625T680-780v140l182 182q8 8 13 19.278 5 11.278 5 23.722v195q0 24.75-17.625 42.375T820-160zm52-308h576L620-616v-164H340v164zm-52 248h680v-188H140zm280-74q-8 0-14-6t-6-14q0-8 6-14t14-6h120q8 0 14 6t6 14q0 8-6 14t-14 6z" />
  </svg>
);
export default SvgRangeHood;
