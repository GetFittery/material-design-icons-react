import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarMonth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M438.565-398.565v-82.87h82.87v82.87zm-160 0v-82.87h82.87v82.87zm320 0v-82.87h82.87v82.87zm-160 160v-82.87h82.87v82.87zm-160 0v-82.87h82.87v82.87zm320 0v-82.87h82.87v82.87zM114.022-74.022v-752.196h131.026v-60h69.017v60h331.87v-60h69.113v60h131.17v752.196zm68.13-68.13h595.696V-570H182.152zm0-487.848h595.696v-127.848H182.152zm0 0v-127.848z" />
  </svg>
);
export default SvgCalendarMonth;
