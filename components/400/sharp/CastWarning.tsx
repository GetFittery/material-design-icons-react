import * as React from "react";
import type { SVGProps } from "react";
const SvgCastWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M81-264q41.667 0 70.833 30.333Q181-203.333 181-160H81zm0-160q108.643 0 184.321 77.5Q341-269 341-160h-60q0-84.66-58-144.33Q165-364 81-364zm0-160q87 0 163.5 33.5t133.5 91q57 57.5 90 135T501-160h-60q0-75-28-141.5t-77-116q-49-49.5-114.5-78T81-524zm800 424H601q0-15-1-30t-3-30h224v-278q17-7 31.5-15t28.5-19zM81-684v-116h409q-5 14-7 29t-3 31H141v60q-15-2-30-3t-30-1m649 144q-78 0-134-55.399-56-55.4-56-134Q540-808 596-864t134-56q78 0 134 55.867Q920-808.265 920-729q0 78.435-56 133.718Q808-540 730-540m17-76v-44h-35v44zm-35-85h35v-143h-35z" />
  </svg>
);
export default SvgCastWarning;
