import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckInOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M258-200q-49 0-82.5-34T141-319q-1-51 32.8-85t84.5-34q50.7 0 83.7 34t33 85q0 51-33 85t-84 34M153-521v-239h40v239zm104.088 279Q289-242 310.5-263.5t21.5-56q0-34.5-21.5-56T257-397q-31.873 0-52.437 21.904Q184-353.192 184-319q0 33.297 20.588 55.149Q225.176-242 257.088-242M255-521v-239h50l96 177-2-37v-140h40v239h-46L292-706l3 37v148zm254 321q-42 0-67-27t-25-71v-140h40v144q0 22.714 14.5 37.857T509-241q23 0 37.5-15.143T561-294v-144h40v140q0 44-25.275 71-25.274 27-66.725 27m201 0v-197h-68v-41h176v41h-68v197z" />
  </svg>
);
export default SvgCheckInOut;
