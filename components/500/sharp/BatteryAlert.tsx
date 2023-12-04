import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M272.587-74.022v-748.196h123.348v-64h168.13v64h123.348v748.196zm68.37-68.13h278.086v-611.696H340.957zm0 0h278.086zm105.934-259.174h66.457v-246.457h-66.457zm33.492 152.87q13.817 0 23.391-9.837 9.574-9.837 9.574-23.655 0-13.817-9.699-23.391-9.699-9.574-23.766-9.574-13.318 0-23.155 9.699-9.837 9.699-9.837 23.766 0 13.318 9.837 23.155 9.837 9.837 23.655 9.837" />
  </svg>
);
export default SvgBatteryAlert;
