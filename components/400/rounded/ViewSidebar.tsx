import * as React from "react";
import type { SVGProps } from "react";
const SvgViewSidebar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-160q-24.75 0-42.375-17.625T80-220v-520q0-24.75 17.625-42.375T140-800h680q24.75 0 42.375 17.625T880-740v520q0 24.75-17.625 42.375T820-160zm543-443h137v-137H683zm0 186h137v-126H683zM140-220h483v-520H140zm543 0h137v-137H683z" />
  </svg>
);
export default SvgViewSidebar;
