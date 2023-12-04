import * as React from "react";
import type { SVGProps } from "react";
const SvgChessFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M114.022-74.022V-319.76h134.869l23.522-167.13H164.022v-66.457h632.196v66.457H687.587l23.761 167.13h134.87v245.74H114.022Zm142.152-539.326-60.239-272.87q32.435 31.196 70.75 46.74 38.315 15.543 75.598 15.543 36.521 0 71.26-15.163 34.74-15.163 66.457-47.12 31.717 31.957 66.457 47.12 34.739 15.163 71.021 15.163 36.522 0 75.816-15.663 39.293-15.663 71.728-46.62l-60.957 272.87z" />
  </svg>
);
export default SvgChessFill;
