import * as React from "react";
import type { SVGProps } from "react";
const SvgThermostat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M523-580v-60h230v60zm0-120v-60h320v60zM296-121q-75.53 0-128.765-53.235Q114-227.47 114-303q0-48 24-90.5t66-68.5v-286q0-38.333 26.765-65.167 26.764-26.833 65-26.833Q334-840 361-813.167q27 26.834 27 65.167v286q42 26 66 68.5t24 90.5q0 75.53-53.235 128.765Q371.53-121 296-121M174-303h244q0-40-19-71.5T348-420l-20-9v-319q0-13.6-9.2-22.8-9.2-9.2-22.8-9.2-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8v319l-20 9q-32 14-51 46t-19 71" />
  </svg>
);
export default SvgThermostat;
