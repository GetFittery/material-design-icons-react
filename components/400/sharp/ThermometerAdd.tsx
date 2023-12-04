import * as React from "react";
import type { SVGProps } from "react";
const SvgThermometerAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M690-520v-130H560v-60h130v-130h60v130h130v60H750v130zM320-120q-75.53 0-128.765-53.235Q138-226.47 138-302q0-49.099 24-91.55Q186-436 228-462v-286q0-38.333 26.765-65.167 26.764-26.833 65-26.833Q358-840 385-813.167q27 26.834 27 65.167v286q42 26 66 68.45 24 42.451 24 91.55 0 75.53-53.235 128.765Q395.53-120 320-120m-32-429h64v-199q0-13.6-9.2-22.8-9.2-9.2-22.8-9.2-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8z" />
  </svg>
);
export default SvgThermometerAdd;
